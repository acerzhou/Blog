## What is Container & Docker

Container

> A container is a standard unit of software that packages up code and all its dependencies so the application runs quickly and reliably from one computing environment to another.

Docker

> Docker is an open source platform for building, deploying, and managing containerized applications.

Because docker is so popular today, the word docker and container are used interchangeably. However, docker is a way doing container, there are also other technologies can do containers e.g. Buildah & Podman.

## Brief history, and future

If we zoom out from current day to day life, and put into a bigger picture. There is a trending of technologies evolvement.

// TODO: Need a Image
Server -> Virtual Machine -> Container -> Serverless -> Codeless

It doesn't mean the next stage will replace previous one, they are going to co-existed in the future, and they are going to work in different situations or case by case.

The only change between each stage is the requirements of depth of understanding IT gradually decreased toward to right side.

## What is under the hood

There are three key technology within container

- Chroot - Create an isolated environment (File level isolation)
- Namespace - Hide other running process (Running Process level isolation)
- cgroups - Restricted resources can be accessed by current process (Resources level isolation)

#### chroot

chroot is a command that create a jail and isolated the process, so it doesn't aware of anything outside of the working root directory.

<details>
  <summary> > Click to See Experiment</summary>

```
# Download a ubuntu container
docker run -it --name docker-host --rm --privileged ubuntu:bionic

# Create a new root
mkdir /new-root

# Create a bin folder - bin folder is for normal cmd
mkdir /new-root/bin

# Copy bash & ls into new-root bin
cp /bin/bash /bin/ls /new-root/bin

# Create lib & lib64 folder for dependencies
mkdir /new-root/lib{,64}

# Copy dependencies
# For Bash
cp /lib/x86_64-linux-gnu/libtinfo.so.5 /lib/x86_64-linux-gnu/libdl.so.2 /lib/x86_64-linux-gnu/libc.so.6 /new-root/lib
cp /lib64/ld-linux-x86-64.so.2 /new-root/lib64

# For ls
cp /lib/x86_64-linux-gnu/libselinux.so.1 /lib/x86_64-linux-gnu/libpcre.so.3 /lib/x86_64-linux-gnu/libpthread.so.0 /new-root/lib

# Run chroot
chroot /new-root bash

```

</details>

#### Namespaces

> - It takes a global system resource like a mount point and it provides a wrapper around it that makes it look to the process living in that namespace like it has its own isolated instance of that resource.
> - Namespaces allow the partitioning of kernel resources ensuring that one set of processes sees only the resources allocated to it while another set of processes sees only the resources allocated to it.
> - Namespaces limit what resources a process or a set of processes can see

<details>
  <summary> > Click to See Experiment</summary>

```
Reference - https://btholt.github.io/complete-intro-to-containers/namespaces

# install debootstrap
apt-get update -y
apt-get install debootstrap -y
debootstrap --variant=minbase bionic /better-root

# head into the new namespace'd, chroot'd environment
unshare --mount --uts --ipc --net --pid --fork --user --map-root-user chroot /better-root bash # this also chroot's for us
mount -t proc none /proc # process namespace
mount -t sysfs none /sys # filesystem
mount -t tmpfs none /tmp # filesystem
```

</details>

#### cgroups

> - Cgroups or control groups were originally released by google as process containers.
> - Cgroups isolate a process’s ability to have access to a system resource.

<details>
  <summary> > Click to See Experiment</summary>

```
Reference https://btholt.github.io/complete-intro-to-containers/cgroups

# outside of unshare'd environment get the tools we'll need here
apt-get install -y cgroup-tools htop

# create new cgroups
cgcreate -g cpu,memory,blkio,devices,freezer:/sandbox

# add our unshare'd env to our cgroup
ps aux # grab the bash PID that's right after the unshare one
cgclassify -g cpu,memory,blkio,devices,freezer:sandbox <PID>

# list tasks associated to the sandbox cpu group, we should see the above PID
cat /sys/fs/cgroup/cpu/sandbox/tasks

# show the cpu share of the sandbox cpu group, this is the number that determines priority between competing resources, higher is is higher priority
cat /sys/fs/cgroup/cpu/sandbox/cpu.shares

# kill all of sandbox's processes if you need it
# kill -9 $(cat /sys/fs/cgroup/cpu/sandbox/tasks)

# Limit usage at 5% for a multi core system
cgset -r cpu.cfs_period_us=100000 -r cpu.cfs_quota_us=$[ 5000 * $(getconf _NPROCESSORS_ONLN) ] sandbox

# Set a limit of 80M
cgset -r memory.limit_in_bytes=80M sandbox
# Get memory stats used by the cgroup
cgget -r memory.stat sandbox

# in terminal session #2, outside of the unshare'd env
htop # will allow us to see resources being used with a nice visualizer

# in terminal session #1, inside unshared'd env
yes > /dev/null # this will instantly consume one core's worth of CPU power
# notice it's only taking 5% of the CPU, like we set
# if you want, run the docker exec from above to get a third session to see the above command take 100% of the available resources
# CTRL+C stops the above any time

# in terminal session #1, inside unshare'd env
yes | tr \\n x | head -c 1048576000 | grep n # this will ramp up to consume ~1GB of RAM
# notice in htop it'll keep the memory closer to 80MB due to our cgroup
# as above, connect with a third terminal to see it work outside of a cgroup
```

</details>

## Docker Client & Docker Server

See Docker info

```
docker version
```

#### Docker Client - Docker CLI

#### Docker Server - Docker Daemon

Docker Daemon is a long running process. It is the core part of docker service.

To see dockerd process

```
ps -aux | grep dockerd
```

## Dockerfile -> Image -> Container

## Docker CLI

## Dev Environment

## Beyond Docker

## Reference

##### Docker

- https://frontendmasters.com/courses/complete-intro-containers/
- https://btholt.github.io/complete-intro-to-containers/
- https://www.docker.com/resources/what-container
- https://www.ibm.com/cloud/learn/docker

##### chroot

- https://www.howtogeek.com/441534/how-to-use-the-chroot-command-on-linux/
- https://en.wikipedia.org/wiki/Chroot

##### Namespace

- https://www.linuxnix.com/understanding-namespaces-and-cgroups-in-linux/

##### Docker client & server

- https://medium.com/tech-learn-share/using-the-docker-client-server-5ad7d696f780
- https://dockerlabs.collabnix.com/beginners/components/daemon/
- https://docs.docker.com/config/daemon/
