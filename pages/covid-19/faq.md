---
permalink: covid-19/faq
title: Frequently asked questions
---

### Why is the reads cleaning tool not showing files for input?
You have uploaded sequence files, they appear in your history but you do not see them in the human reads cleaning tool. This issue is related to the sequence file format. The files need to be in *fastq.gz* or *fastq.bz2* compressed format. Galaxy will try to guess the datatype during upload. If it fails to do so correctly, you can <i class="fa fa-pencil"></i> Edit the dataset's attibutes and manually change the <i class="fa fa-database"></i> Datatype to *fastq.gz*.



### Why do my outputs from reads cleaning have no sequence?
The output of the read cleaning tool is a small file (40Kb) with no sequences. This issue can be related to memory requirements.
The human reads cleaning tool uses [BWA Mem](http://bio-bwa.sourceforge.net/) for mapping reads to the human genome. This step is memory demanding.
A modestly specced workstation may become laggy and not finish the mapping step, resulting in no output sequence file. Increasing the swap file or swap partition size can help with this issue.

### I Have "page not found" when visiting [http://localhost:8080/](http://localhost:8080/), what do I do?

Please wait a little longer. If the problem keeps occurring, please press ctrl-c to break the container startup and try again.

### Why are no reference genomes available in the read cleaning tool?
If this problem occurs, pleas try using the docker container that has the human reference genome pre-included by using following command:

```
docker run -p "8080:80" quay.io/galaxy/ena-upload:hg38
```

### Is my session lost after closing the terminal?
If you close the terminal, the container will be stopped, but will not be deleted. If you want to re-use this Galaxy session please run:

- **Linux/Windows:**
    
    *Raw read submission + assembly workflows:*

    ```
    docker start quay.io/galaxy/covid-19-upload
    ```
    *Raw read submission only:*
    ```
    docker start quay.io/galaxy/ena-upload
    ```

- **MacOS:**
    
    *Raw read submission only:*

    ```
    docker start quay.io/galaxy/ena-upload:hg38
    ```

### Running the containers is taking a lot of storage space, is this normal?
If you are playing around with containers you might run into the fact that they can take up a lot of storage space. This can be avoided by deleting all your existing containers/images and volumes if you don't need them anymore. Use following commands to do so:

- Delete all containers /images and networks that are not in use
    ```
    docker system prune -a
    ```

- Delete volumes
    ```
    docker volume rm $(docker volume ls -qf dangling=true)
    ```
