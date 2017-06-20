#!/bin/bash

# parameter
befehl="$1"

# bei deployment auch gleich liferay-rechte anpassen
if [ "$befehl" = "deploy" ] ; then
	gradle -i deploy && chmod o+w /var/lib/liferay/deploy/*
else
	gradle -i "$befehl"
fi
