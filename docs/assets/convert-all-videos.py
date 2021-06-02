import os
import glob
import subprocess

FNULL = open(os.devnull, 'w')
for fname in glob.iglob('**/*.mov', recursive=True):
    dest_fname = os.path.splitext(fname)[0] + '.mp4'
     
    if (not os.path.exists(dest_fname)):
        print(fname, ' -> ', dest_fname)
        cmd = ['ffmpeg', 
            '-i', fname, 
            '-vcodec', 'h264', 
            '-filter:v', 'fps=25, scale=1920:trunc(ow/a/2)*2', 
            '-an', 
            dest_fname
        ]
        # print(subprocess.list2cmdline(cmd))
        subprocess.call(cmd, stdout=FNULL, stderr=subprocess.STDOUT)
    else:
        print('SKIPPING ', dest_fname, ' BECAUSE IT EXISTS ALREADY')