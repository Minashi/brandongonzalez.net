#!/bin/sh

#Author: Brandon Gonzalez

rm -R projectResume

unzip projectResumeNew.zip

mv /home/minashi/projectResumeNew /home/minashi/projectResume

rm projectResumeNew.zip

sudo systemctl restart node-app-service-name.service

echo update complete
