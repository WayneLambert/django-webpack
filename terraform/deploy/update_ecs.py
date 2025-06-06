import boto3
import click

from rich import print, print_json


def get_current_task_definition(client, cluster, service):
    response = client.describe_services(cluster=cluster, services=[service])
    current_task_arn = response["services"][0]["taskDefinition"]

    response = client.describe_task_definition(taskDefinition=current_task_arn)
    return response


@click.command()
@click.option("--cluster", help="Name of the ECS cluster", required=True)
@click.option("--service", help="Name of the ECS service", required=True)
def deploy(cluster, service):
    client = boto3.client("ecs")

    container_definitions = []
    response = get_current_task_definition(client, cluster, service)
    for container_definition in response["taskDefinition"]["containerDefinitions"]:
        new_def = container_definition.copy()
        container_definitions.append(new_def)

    print("Container Defintions\n")
    print(container_definitions)
    print("\n")

    response = client.register_task_definition(
        family=response["taskDefinition"]["family"],
        volumes=response["taskDefinition"]["volumes"],
        containerDefinitions=container_definitions,
    )
    new_task_arn = response["taskDefinition"]["taskDefinitionArn"]
    print("New Task ARN\n")
    print(new_task_arn)
    print("\n")

    response = client.update_service(
        cluster=cluster,
        service=service,
        taskDefinition=new_task_arn,
    )
    print("Response\n")
    print(response)


if __name__ == "__main__":
    deploy()
