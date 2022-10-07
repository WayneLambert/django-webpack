import os

from pathlib import Path


current_work_dir = os.getcwd()


def clear_down_files():
    js_dir = os.path.join(current_work_dir, 'core/templates/core/head_tags/js')
    css_dir = os.path.join(current_work_dir, 'core/templates/core/head_tags/css')
    dirs = [Path(js_dir), Path(css_dir)]
    for dir in dirs:
        [f.unlink() for f in dir.iterdir() if f.is_file()]


def create_script_tag_filename(line):
    filename = line.split(' ')[2].split('>')[0].replace("\"", "")
    filename = filename.split('/')[-1].split('.')[0].replace("-", "_")
    filename = f"{filename}.txt"
    filepath = os.path.join(current_work_dir, 'core/templates/core/head_tags/js/')
    return f"{filepath}{filename}"


def create_link_tag_filename(line):
    filename = line.split("/")[4].split('.')[0]
    filename = f"{filename}.txt"
    filepath = os.path.join(current_work_dir, 'core/templates/core/head_tags/css/')
    return f"{filepath}{filename}"


def delete_temp_file(file):
    os.remove(file)


def main():
    clear_down_files()
    tmp_file = os.path.join(current_work_dir, 'core/templates/core/head_tags/temp.txt')
    with open(file=tmp_file, mode='r') as reader, open(file=tmp_file, mode='r+') as writer:
        for line in reader:
            if line.strip():
                writer.write(line)
        writer.truncate()

    with open(file=tmp_file, mode='r') as reader:
        for line in reader:
            if "</script>" in line:
                file = create_script_tag_filename(line)
                with open(file=file, mode='w') as f:
                    f.write(line.strip('\n'))
            if "stylesheet" in line:
                file = create_link_tag_filename(line)
                with open(file=file, mode='w') as f:
                    f.write(line.strip('\n'))

    # delete_temp_file(tmp_file)
    print('The script tags file has been created!')


if __name__ == '__main__':
    main()
