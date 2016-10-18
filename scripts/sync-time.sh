#!/bin/bash

###############################################################################
#
# Usage:
# ./sync-time.sh  [-- command args]
#
# Example:
# ./sync-time.sh  -- echo "DONE"
#
###############################################################################

if [[ $1 == "--" ]]; then
    shift 1
    COMMAND="$@"
fi

TIMEZONE="Europe/Warsaw"
NTP_SERVER="Europe/Warsaw"

cp ./sync-time.sh /etc/periodic/daily/

echo "Setting timezone to $TIMEZONE"
cp /usr/share/zoneinfo/${TIMEZONE} /etc/localtime

echo "Syncing time with $NTP_SERVER"
ntpd -d -s -n -p ${NTP_SERVER}

if [[ $COMMAND != "" ]]; then
    echo "Executing command $COMMAND"
    exec $COMMAND
else
    exit 0
fi
