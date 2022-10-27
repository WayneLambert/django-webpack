from uvicorn.workers import UvicornWorker


class ProjectUvicornWorker(UvicornWorker):
    CONFIG_KWARGS = {
        "lifespan": "off",
        "log_level": "debug",
    }
