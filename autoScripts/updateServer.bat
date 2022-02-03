#!/bin/bash
#uhh test

echo zipping file...

powershell -Command "Compress-Archive D:\Documents\MicrosoftVSCode\projectResume D:\Documents\MicrosoftVSCode\projectResumeNew.zip"

echo file zipped.

echo FTP file to server

ftp -i -s:ftpSetUp.ftp

echo Sent.

del D:\Documents\MicrosoftVSCode\projectResumeNew.zip

echo Zip file removed.

exit
