import argparse
import os
import yaml


def parse_args():
    parser = argparse.ArgumentParser()
    parser.add_argument("--template", default="docker-compose.yml.template")
    parser.add_argument("--output", default="docker-compose.yml")
    parser.add_argument("--envs_folder", default="environments")

    return parser.parse_args()


if __name__ == '__main__':

    args = parse_args()
    with open(args.template, "r") as fin:
        docker_config = yaml.load(fin)

    env_files = sorted(os.listdir(args.envs_folder))

    gather_listeners = {}
    gather_setups = {}
    print(f"Creating output file {args.output} using {args.template} as template and using environment files from folder {args.envs_folder}...")

    for ind, env_file in enumerate(env_files, start=1):
        print(f"Using {env_file} file...")
        gather_listeners[f'gather-listeners-{ind}'] = docker_config['services']['gather-listeners'].copy()
        gather_listeners[f'gather-listeners-{ind}']['volumes'] = [
            f'${{PWD}}/{args.envs_folder}/{env_file}:/app/.env'
        ]
        gather_setups[f'gather-setup-{ind}'] = docker_config['services']['gather-setup'].copy()
        gather_setups[f'gather-setup-{ind}']['volumes'] = [
            f'${{PWD}}/{args.envs_folder}/{env_file}:/app/.env'
        ]

    docker_config['services'] = {**gather_listeners, **gather_setups}

    with open(args.output, "w") as fout:
        yaml.dump(docker_config, fout, default_flow_style=False)

    with open("run_listeners.sh", "w") as fout:
        listeners_list = [f'gather-listeners-{ind+1}' for ind in range(len(gather_listeners))]
        fout.write(f"docker-compose up -d {' '.join(listeners_list)}")

    with open("setup_rooms.sh", "w") as fout:
        setups_list = [f'gather-setup-{ind+1}' for ind in range(len(gather_setups))]
        fout.write(f"docker-compose up {' '.join(setups_list)}")

    print("Configuration finished. In order to setup the rooms, use the script setup_rooms.sh")
    print("In order to deploy the listeners for the doors, use the script run_listeners.sh")
