import os

from pathlib import Path


current_work_dir = os.getcwd()
scripts_dir = os.path.join(current_work_dir, 'core/templates/core/head_tags/scripts/')
styles_dir = os.path.join(current_work_dir, 'core/templates/core/head_tags/styles/')

base_libs = ['bootstrap.txt', 'runtime.txt', 'index.txt', 'htmx.txt', 'alpinejs.txt', 'vendor.txt']


def clear_down_files():
    dirs = [
        Path(scripts_dir) / 'base',
        Path(scripts_dir) / 'child',
        Path(styles_dir) / 'base',
        Path(styles_dir) / 'child',
    ]
    for dir in dirs:
        [f.unlink() for f in dir.iterdir() if f.is_file()]


def create_script_and_styles_text_files():
    scripts_file = os.path.join(scripts_dir, 'scripts.txt')
    styles_file = os.path.join(styles_dir, 'styles.txt')
    tmp_files = [scripts_file, styles_file]
    for tmp_file in tmp_files:
        with open(file=tmp_file, mode='r') as reader, open(file=tmp_file, mode='r+') as writer:
            for line in reader:
                if line.strip():
                    writer.write(line)
            writer.truncate()
    return tmp_files


def _create_script_tag_filename(line):
    filename = line.replace("\n", "").split("/")[-1].split(".")[-2] + ".txt"
    filepath = scripts_dir if line.endswith(".js\n") else styles_dir
    if any(lib in filename for lib in base_libs):
        return f"{filepath}base/{filename}"
    else:
        return f"{filepath}child/{filename}"


def create_individual_tags(tmp_files):
    for tmp_file in tmp_files:
        with open(file=tmp_file, mode='r') as reader:
            for line in reader:
                file = _create_script_tag_filename(line)
                with open(file=file, mode='w') as f:
                    f.write(line.strip('\n'))


def delete_temp_files(tmp_files):
    for file in tmp_files:
        os.remove(file)


def main():
    clear_down_files()
    print('1) Previous files have been cleared down.')
    tmp_files = create_script_and_styles_text_files()
    create_individual_tags(tmp_files)
    # delete_temp_files(tmp_files)
    print(
        '2) The individual script and style tag files have been '
        + 'created and separated as base and child tags.'
    )


if __name__ == '__main__':
    main()
