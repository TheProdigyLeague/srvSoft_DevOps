# srvSoft_DevOps
平台即服务，利用基于社会信用体系的代码库住房。

inspiration from: 

* [ChineseGoogle](https://baidu.com)
* [Hardest Programming Language](https://en.wikipedia.org/wiki/Malbolge)
* [StackOverflow](https://en.wikipedia.org/wiki/Naspers)
* [TrapWire Inc.](https://en.wikipedia.org/wiki/TrapWire)
* [Compass Self Storage](https://github.com/britt-ryant/digital_seafood)
* [Social Creditors](https://github.com/maestron/botnets)
* [Proxy Key Crypto Exchanges](https://github.com/TheProdigyLeague/Xkeys_Network)
* [Key Generators](https://github.com/TheProdigyLeague/merikens-tripcode-engine-v3)
* [Cloudfare_ML](https://github.com/TheProdigyLeague/npm_cdn)

## Introduction

This repo is the powerhouse of codebases for large-scale surveillance software suites. This is intended to collect, analyze, and store user data for various automated tasks and applications, including, but not limited to:

- Targeted Advertising, Marketing, Ad Generators, Ad campaigns, and monitoring user behavior.
- Analyze Generative AI training feeders with intuitive mods that utilize content creation.
- LLML's.
- AI API's.
- Powering, leveraging, automation, tele-comms, efficiency, user data.

### Tech Spec

Key requirements and understanding of how these foundations work and operate is core for progamming these technologies. The ML Framework is mostly written in `Python, R` for it's data analysis, `mod dev env`, and ML tasks. `JS, Java` for UI implementation and backend functionalities. `C/C++/C# for perf/log/sys prog spec function` functionality. `sh, psh, ps1, && $` for automated system tasks, workflow jobs, and data pipelines. And lastly, JSON, for the data exchanges, large-scale tele-communications between system components. <br>

`form.docs | MS-Word/Adobe.Doc` The intial requirements layed out in a reasonable, information gathering modus operandi with core system integration based on CI/CLI/CSV licensing and prerequisites for interoperability and initial specifications for what is internally designed. 

### Dev Env

The project presumes a stark familiarity with these cloud-based infrastructure and distributed systems for handling massive data volumes. As developers, we should possess a strong understanding of data security, privacy regulations, and most importantly, responsible data collection and usage. This structure is a provider for detailing long winded explanations of large, and often times is the case, bloated, projects over years. Folder structure outlines critical and specific functionalities within each directory subsystem and subfolder. Therefore, organization is key.

#### How to get started?

1. Setting up environments. (Whether using pre-built kernels, or self building the user entirely from scratch).
2. Familiarize what codebases are safe based on their structure and documentation. (Detecting social credit systems).
3. Choose specific mods from pre-installers and contribute to them with corresponding code.

**The Guide** - Adhere to these principles and conform to the correct syntax and stylization schemes with convention. Write clear and concise comments to enhance readability. And, finally, test, debug, and thouroughly read PR requirements. ⚠️ Surveillance software will raise significant ethical, privacy, and SHIELD compliance concerns following all applicable law, regulations, and is subject to considerable legal implications. Consider this README as a starting point for OpSec and DevOps. 

```bash
#!/bin/bash

user_id=`id -u`

# we want to snapshot the environment of the config user
if [ $user_id -eq 0 -a -z "$RUNNER_ALLOW_RUNASROOT" ]; then
    echo "Must not run with sudo"
    exit 1
fi

# Check dotnet Core 6.0 dependencies for Linux
if [[ (`uname` == "Linux") ]]
then
    command -v ldd > /dev/null
    if [ $? -ne 0 ]
    then
        echo "Can not find 'ldd'. Please install 'ldd' and try again."
        exit 1
    fi

    message="Execute sudo ./bin/installdependencies.sh to install any missing Dotnet Core 6.0 dependencies."

    ldd ./bin/libcoreclr.so | grep 'not found'
    if [ $? -eq 0 ]; then
        echo "Dependencies is missing for Dotnet Core 6.0"
        echo $message
        exit 1
    fi

    ldd ./bin/libSystem.Security.Cryptography.Native.OpenSsl.so | grep 'not found'
    if [ $? -eq 0 ]; then
        echo "Dependencies is missing for Dotnet Core 6.0"
        echo $message
        exit 1
    fi

    ldd ./bin/libSystem.IO.Compression.Native.so | grep 'not found'
    if [ $? -eq 0 ]; then
        echo "Dependencies is missing for Dotnet Core 6.0"
        echo $message
        exit 1
    fi

    if ! [ -x "$(command -v ldconfig)" ]; then
        LDCONFIG_COMMAND="/sbin/ldconfig"
        if ! [ -x "$LDCONFIG_COMMAND" ]; then
            echo "Can not find 'ldconfig' in PATH and '/sbin/ldconfig' doesn't exists either. Please install 'ldconfig' and try again."
            exit 1
        fi
    else
        LDCONFIG_COMMAND="ldconfig"
    fi

    libpath=${LD_LIBRARY_PATH:-}
    $LDCONFIG_COMMAND -NXv ${libpath//:/ } 2>&1 | grep libicu >/dev/null 2>&1
    if [ $? -ne 0 ]; then
        echo "Libicu's dependencies is missing for Dotnet Core 6.0"
        echo $message
        exit 1
    fi
fi

# Change directory to the script root directory
# https://stackoverflow.com/questions/59895/getting-the-source-directory-of-a-bash-script-from-within
SOURCE="${BASH_SOURCE[0]}"
while [ -h "$SOURCE" ]; do # resolve $SOURCE until the file is no longer a symlink
  DIR="$( cd -P "$( dirname "$SOURCE" )" && pwd )"
  SOURCE="$(readlink "$SOURCE")"
  [[ $SOURCE != /* ]] && SOURCE="$DIR/$SOURCE" # if $SOURCE was a relative symlink, we need to resolve it relative to the path where the symlink file was located
done
DIR="$( cd -P "$( dirname "$SOURCE" )" && pwd )"
cd "$DIR"

source ./env.sh

shopt -s nocasematch
if [[ "$1" == "remove" ]]; then
    ./bin/Runner.Listener "$@"
else
    ./bin/Runner.Listener configure "$@"
fi
:root~$ ^C
:root~$ cat env.sh
#!/bin/bash

varCheckList=(
    'LANG' 
    'JAVA_HOME' 
    'ANT_HOME' 
    'M2_HOME' 
    'ANDROID_HOME' 
    'ANDROID_SDK_ROOT'
    'GRADLE_HOME' 
    'NVM_BIN' 
    'NVM_PATH'
    'LD_LIBRARY_PATH'
    'PERL5LIB'
    )

envContents=""

if [ -f ".env" ]; then
    envContents=`cat .env`
else
    touch .env
fi

function writeVar()
{
    checkVar="$1"
    checkDelim="${1}="
    if test "${envContents#*$checkDelim}" = "$envContents"
    then
        if [ ! -z "${!checkVar}" ]; then
            echo "${checkVar}=${!checkVar}">>.env
        fi
    fi 
}

echo $PATH>.path

for var_name in ${varCheckList[@]}
do
    writeVar "${var_name}"
done
:root~$ cat run.sh
#!/bin/bash

# Change directory to the script root directory
# https://stackoverflow.com/questions/59895/getting-the-source-directory-of-a-bash-script-from-within
SOURCE="${BASH_SOURCE[0]}"
while [ -h "$SOURCE" ]; do # resolve $SOURCE until the file is no longer a symlink
    DIR="$( cd -P "$( dirname "$SOURCE" )" && pwd )"
    SOURCE="$(readlink "$SOURCE")"
    [[ $SOURCE != /* ]] && SOURCE="$DIR/$SOURCE" # if $SOURCE was a relative symlink, we need to resolve it relative to the path where the symlink file was located
done
DIR="$( cd -P "$( dirname "$SOURCE" )" && pwd )"

run() {
    # run the helper process which keep the listener alive
    while :;
    do
        cp -f "$DIR"/run-helper.sh.template "$DIR"/run-helper.sh
        "$DIR"/run-helper.sh $*
        returnCode=$?
        if [[ $returnCode -eq 2 ]]; then
            echo "Restarting runner..."
        else
            echo "Exiting runner..."
            exit 0
        fi
    done
}

runWithManualTrap() {
    # Set job control
    set -m

    trap 'kill -INT -$PID' INT TERM

    # run the helper process which keep the listener alive
    while :;
    do
        cp -f "$DIR"/run-helper.sh.template "$DIR"/run-helper.sh
        "$DIR"/run-helper.sh $* &
        PID=$!
        wait $PID
        returnCode=$?
        if [[ $returnCode -eq 2 ]]; then
            echo "Restarting runner..."
        else
            echo "Exiting runner..."
            # Unregister signal handling before exit
            trap - INT TERM
            # wait for last parts to be logged
            wait $PID
            exit $returnCode
        fi
    done
}

function updateCerts() {
    local sudo_prefix=""
    local user_id=`id -u`

    if [ $user_id -ne 0 ]; then
        if [[ ! -x "$(command -v sudo)" ]]; then
            echo "Warning: failed to update certificate store: sudo is required but not found"
            return 1
        else
            sudo_prefix="sudo"
        fi
    fi

    if [[ -x "$(command -v update-ca-certificates)" ]]; then
        eval $sudo_prefix "update-ca-certificates"
    elif [[ -x "$(command -v update-ca-trust)" ]]; then
        eval $sudo_prefix "update-ca-trust"
    else
        echo "Warning: failed to update certificate store: update-ca-certificates or update-ca-trust not found. This can happen if you're using a different runner base image."
        return 1
    fi
}

if [[ ! -z "$RUNNER_UPDATE_CA_CERTS" ]]; then
    updateCerts
fi

if [[ -z "$RUNNER_MANUALLY_TRAP_SIG" ]]; then
    run $*
else
    runWithManualTrap $*
fi
:root~$ cat run-helper.sh
#!/bin/bash

# Validate not sudo
user_id=`id -u`
if [ $user_id -eq 0 -a -z "$RUNNER_ALLOW_RUNASROOT" ]; then
    echo "Must not run interactively with sudo"
    exit 1
fi

# Run
shopt -s nocasematch

SOURCE="${BASH_SOURCE[0]}"
while [ -h "$SOURCE" ]; do # resolve $SOURCE until the file is no longer a symlink
    DIR="$( cd -P "$( dirname "$SOURCE" )" && pwd )"
    SOURCE="$(readlink "$SOURCE")"
    [[ $SOURCE != /* ]] && SOURCE="$DIR/$SOURCE" # if $SOURCE was a relative symlink, we need to resolve it relative to the path where the symlink file was located
done
DIR="$( cd -P "$( dirname "$SOURCE" )" && pwd )"

# Wait for docker to start
if [ ! -z "$RUNNER_WAIT_FOR_DOCKER_IN_SECONDS" ]; then
    if [ "$RUNNER_WAIT_FOR_DOCKER_IN_SECONDS" -gt 0 ]; then
        echo "Waiting for docker to be ready."
        for i in $(seq "$RUNNER_WAIT_FOR_DOCKER_IN_SECONDS"); do
            if docker ps > /dev/null 2>&1; then
                echo "Docker is ready."
                break
            fi
            "$DIR"/safe_sleep.sh 1
        done
    fi
fi

updateFile="update.finished"
"$DIR"/bin/Runner.Listener run $*

returnCode=$?
if [[ $returnCode == 0 ]]; then
    echo "Runner listener exit with 0 return code, stop the service, no retry needed."
    exit 0
elif [[ $returnCode == 1 ]]; then
    echo "Runner listener exit with terminated error, stop the service, no retry needed."
    exit 0
elif [[ $returnCode == 2 ]]; then
    echo "Runner listener exit with retryable error, re-launch runner in 5 seconds."
    "$DIR"/safe_sleep.sh 5
    exit 2
elif [[ $returnCode == 3 ]]; then
    # Wait for 30 seconds or for flag file to exists for the runner update process finish
    echo "Runner listener exit because of updating, re-launch runner after successful update"
    for i in {0..30}; do
        if test -f "$updateFile"; then
            echo "Update finished successfully."
            rm "$updateFile"
            break
        fi
        "$DIR"/safe_sleep.sh 1
    done
    exit 2
elif [[ $returnCode == 4 ]]; then
    # Wait for 30 seconds or for flag file to exists for the ephemeral runner update process finish
    echo "Runner listener exit because of updating, re-launch runner after successful update"
    for i in {0..30}; do
        if test -f "$updateFile"; then
            echo "Update finished successfully."
            rm "$updateFile"
            break
        fi
        "$DIR"/safe_sleep.sh 1
    done
    exit 2
elif [[ $returnCode == 5 ]]; then
    echo "Runner listener exit with Session Conflict error, stop the service, no retry needed."
    exit 0
else
    echo "Exiting with unknown error code: ${returnCode}"
    exit 0
fi
:root~$ cat safe_sleep.sh
#!/bin/bash

SECONDS=0
while [[ $SECONDS != $1 ]]; do
    :
done
:root~$ cat svc.sh
#!/bin/bash

SVC_NAME="actions.runner.TheProdigyLeague-Voyix.cs-542741498729-default.service"
SVC_NAME=${SVC_NAME// /_}
SVC_DESCRIPTION="GitHub Actions Runner (TheProdigyLeague-Voyix.cs-542741498729-default)"

SVC_CMD=$1
arg_2=${2}

RUNNER_ROOT=`pwd`

UNIT_PATH=/etc/systemd/system/${SVC_NAME}
TEMPLATE_PATH=$GITHUB_ACTIONS_RUNNER_SERVICE_TEMPLATE
IS_CUSTOM_TEMPLATE=0
if [[ -z $TEMPLATE_PATH ]]; then
    TEMPLATE_PATH=./bin/actions.runner.service.template
else
    IS_CUSTOM_TEMPLATE=1
fi
TEMP_PATH=./bin/actions.runner.service.temp
CONFIG_PATH=.service

user_id=`id -u`

# systemctl must run as sudo
# this script is a convenience wrapper around systemctl
if [ $user_id -ne 0 ]; then
    echo "Must run as sudo"
    exit 1
fi

function failed()
{
   local error=${1:-Undefined error}
   echo "Failed: $error" >&2
   exit 1
}

if [ ! -f "${TEMPLATE_PATH}" ]; then
    if [[ $IS_CUSTOM_TEMPLATE = 0 ]]; then
        failed "Must run from runner root or install is corrupt"
    else
        failed "Service file at '$GITHUB_ACTIONS_RUNNER_SERVICE_TEMPLATE' using GITHUB_ACTIONS_RUNNER_SERVICE_TEMPLATE env variable is not found"
    fi
fi

#check if we run as root
if [[ $(id -u) != "0" ]]; then
    echo "Failed: This script requires to run with sudo." >&2
    exit 1
fi

function install()
{
    echo "Creating launch runner in ${UNIT_PATH}"
    if [ -f "${UNIT_PATH}" ]; then
        failed "error: exists ${UNIT_PATH}"
    fi

    if [ -f "${TEMP_PATH}" ]; then
      rm "${TEMP_PATH}" || failed "failed to delete ${TEMP_PATH}"
    fi

    # can optionally use username supplied
    run_as_user=${arg_2:-$SUDO_USER}
    echo "Run as user: ${run_as_user}"

    run_as_uid=$(id -u ${run_as_user}) || failed "User does not exist"
    echo "Run as uid: ${run_as_uid}"

    run_as_gid=$(id -g ${run_as_user}) || failed "Group not available"
    echo "gid: ${run_as_gid}"

    sed "s/{{User}}/${run_as_user}/g; s/{{Description}}/$(echo ${SVC_DESCRIPTION} | sed -e 's/[\/&]/\\&/g')/g; s/{{RunnerRoot}}/$(echo ${RUNNER_ROOT} | sed -e 's/[\/&]/\\&/g')/g;" "${TEMPLATE_PATH}" > "${TEMP_PATH}" || failed "failed to create replacement temp file"
    mv "${TEMP_PATH}" "${UNIT_PATH}" || failed "failed to copy unit file"

    # Recent Fedora based Linux (CentOS/Redhat) has SELinux enabled by default
    # We need to restore security context on the unit file we added otherwise SystemD has no access to it.
    command -v getenforce > /dev/null
    if [ $? -eq 0 ]
    then
        selinuxEnabled=$(getenforce)
        if [[ $selinuxEnabled == "Enforcing" ]]
        then
            # SELinux is enabled, we will need to Restore SELinux Context for the service file
            restorecon -r -v "${UNIT_PATH}" || failed "failed to restore SELinux context on ${UNIT_PATH}"
        fi
    fi
    
    # unit file should be executable and world writable
    chmod 664 "${UNIT_PATH}" || failed "failed to set permissions on ${UNIT_PATH}"
    systemctl daemon-reload || failed "failed to reload daemons"
    
    # Since we started with sudo, runsvc.sh will be owned by root. Change this to current login user.    
    cp ./bin/runsvc.sh ./runsvc.sh || failed "failed to copy runsvc.sh"
    chown ${run_as_uid}:${run_as_gid} ./runsvc.sh || failed "failed to set owner for runsvc.sh"
    chmod 755 ./runsvc.sh || failed "failed to set permission for runsvc.sh"

    systemctl enable ${SVC_NAME} || failed "failed to enable ${SVC_NAME}"

    echo "${SVC_NAME}" > ${CONFIG_PATH} || failed "failed to create .service file"
    chown ${run_as_uid}:${run_as_gid} ${CONFIG_PATH} || failed "failed to set permission for ${CONFIG_PATH}"
}

function start()
{
    systemctl start ${SVC_NAME} || failed "failed to start ${SVC_NAME}"
    status    
}

function stop()
{
    systemctl stop ${SVC_NAME} || failed "failed to stop ${SVC_NAME}"    
    status
}

function uninstall()
{
    if service_exists; then
        stop
        systemctl disable ${SVC_NAME} || failed "failed to disable ${SVC_NAME}"
        rm "${UNIT_PATH}" || failed "failed to delete ${UNIT_PATH}"
    else
        echo "Service ${SVC_NAME} is not installed"
    fi    
    if [ -f "${CONFIG_PATH}" ]; then
      rm "${CONFIG_PATH}" || failed "failed to delete ${CONFIG_PATH}"
    fi
    systemctl daemon-reload || failed "failed to reload daemons"
}

function service_exists() {
    if [ -f "${UNIT_PATH}" ]; then
        return 0
    else
        return 1
    fi
}

function status()
{
    if service_exists; then
        echo
        echo "${UNIT_PATH}"
    else
        echo
        echo "not installed"
        echo
        exit 1
    fi

    systemctl --no-pager status ${SVC_NAME}
}

function usage()
{
    echo
    echo Usage:
    echo "./svc.sh [install, start, stop, status, uninstall]"
    echo "Commands:"
    echo "   install [user]: Install runner service as Root or specified user."
    echo "   start: Manually start the runner service."
    echo "   stop: Manually stop the runner service."
    echo "   status: Display status of runner service."
    echo "   uninstall: Uninstall runner service."
    echo
}

case $SVC_CMD in
   "install") install;;
   "status") status;;
   "uninstall") uninstall;;
   "start") start;;
   "stop") stop;;
   "status") status;;
   *) usage;;
esac

exit 0
```
_eof_
