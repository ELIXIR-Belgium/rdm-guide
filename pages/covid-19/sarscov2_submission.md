---
title: Submission of SARS-Cov-2 DNA sequences to public repositories
keywords: covid-19, SARS-Cov-2, ENA, data-submission, viral sequences
summary: A guide to submit SARS-Cov-2 sequence data to different repositories.
permalink: covid-19/sarscov2_submission.html
---

{% include note.html content="The content on this page is not final." %}

## General
ELIXIR Belgium has developed a Galaxy tool for submission of SARS-Cov-2 genetic sequences and associated metadata to public repositories, namely the European Nucleotide Archive ([ENA](https://www.ebi.ac.uk/ena/browser/home)) and in the future [GISAID](https://www.gisaid.org/). The tool is packaged in a Galaxy container for easy distribution.

## The ENA submission tool
Uploading [raw reads to ENA](https://ena-docs.readthedocs.io/en/latest/submit/general-guide.html) can be done using the website, webin-CLI or programmatically through curl commands.
Programmatic submissions are more convenient for bulk uploads, but require bioinformatic skills to generate the XML metadata files and to upload the data through ftp.
To address this, ELIXIR Belgium together with the lab of Björn Grüning have developed a python command line interface (CLI) that:
- Makes submission easier for bioinformaticians
- Generates the required XML files out of easier-to-use tsv files
- Takes care of the ftp uploading
- Validates the metadata before submission

The python package *ena-upload-cli* is published on [pip](https://pypi.org/project/ena-upload-cli/) and [bioconda](https://anaconda.org/bioconda/ena-upload-cli). For more information on how to use this tool please visit the github page of *[ena-upload-cli](https://github.com/usegalaxy-eu/ena-upload-cli)*.



## The Galaxy container for ENA submissions
To make the process more user-friendly and allow most researchers without informatics experience to submit sequences to ENA without using command line, the tool was wrapped as a [Galaxy tool](https://testtoolshed.g2.bx.psu.edu/repository?repository_id=e6d3d594449ee3f8) and put in a [container](https://github.com/ELIXIR-Belgium/ena-upload-container).

The Galaxy container allows the user to :
- remove human traces from raw reads
- input or upload metadata
- submit reads and metadata to ENA and
- analyze SARS-Cov-2 sequences

A [short introduction to Galaxy](https://training.galaxyproject.org/training-material/topics/introduction/tutorials/galaxy-intro-short/tutorial.html) is recommended for users unfamiliar with the platform.


## Walkthrough of ENA submission using the Galaxy container

A screencast is available on our youtube channel that will guide you through all the steps discussed below:
<br>
<br>
<iframe width="560" height="315" src="https://www.youtube.com/embed/POiQG-7O7rw" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>


### 1. Setting up the Galaxy container

1. Open the terminal
2. Make sure docker is installed and available on your path. To check this, simply type ```docker run hello-world``` in the Terminal or and press enter. If Docker is installed it will give some usage information back. For more information on how to install docker please visit [this website](https://docs.docker.com/get-docker/).
3. Run following command in the terminal to run the container:\\
    **Linux/Windows:**
    ```
    docker run -p "8080:80" --privileged quay.io/galaxy/ena-upload
    ```
    **MacOS:**
    ```
    docker run -p "8080:80" quay.io/galaxy/ena-upload:hg38
    ```
4. Wait a minute or two until the container is started
5. Visit [http://localhost:8080/](http://localhost:8080/) to access your local instance of Galaxy

More information about the container can be found in the [github repository](https://github.com/ELIXIR-Belgium/ena-upload-container). 

### 2. Obtain and load ENA Webin submission credentials

An ENA [Webin account](https://www.ebi.ac.uk/ena/submit/sra/#registration) is required to upload data to the ENA. If you plan to offer this tool as a service to multiple users, then a brokering account is more suitable. To change your Webin account into a broker account, please contact ENA.

You can load your ENA credentials in Galaxy:
1. Login as admin using `admin` as username and `password` as password, this will give you full access to the galaxy instance.
2. Got to **User** > **Preferences** in the top navigation
3. Click on <i class="fa fa-user" aria-hidden="true"></i> **Manage Information**
4. Fill in the `Your ENA Webin account details`
5. Click **Save**

### 3. Upload data to Galaxy
This tool is used to submit raw reads to the ENA. Genome or transcriptome assemblies can be submitted to ENA using their website.
The submission tool currently accepts *fastq.gz* (SE and PE) file format. 


Raw data can be uploaded using Galaxy's <i class="fa fa-upload"></i> upload tool found at the top right of the **Tools** panel (Fig. 1a) or at **Upload File from your computer** under **Upload Data** tool group (Fig. 1b).

{% include image.html file="upload_options.png" alt="Uploading files In Galaxy" caption="Figure 1. Data upload locations in Galaxy "%}


There are different options for uploading data files:
- Local files can be uploaded by drag-and-dropping to 'Drop files here' (Fig. 2a) area or by selecting  'Choose local files'(Fig. 2b) and browsing to the local files
- 'Paste/Fetch data' (Fig 2c) allows fetching remote files from the web by entering a URL or pasting the data itself

{% include image.html file="upload_interface.png" alt="Upload menu" caption="Figure 2. Data upload options in Galaxy"%}

When the local files are selected or a URL is given, click "start" to start the uploading to Galaxy.
More information on data upload to Galaxy can be found in [Galaxy support](https://galaxyproject.org/support/loading-data/).


Your data should appear in green on the right history panel (Fig. 3). You can rename, tag, preview edit or delete data objects from here.
{% include image.html file="history_galaxy.png" alt="history galaxy" caption="Figure 3. Files that are uploaded will show up in the history panel."%}


### 4. Filter human reads out of the raw reads
In order to comply with Europe’s General Data Protection Regulation [(GDPR)](https://ec.europa.eu/info/law/law-topic/data-protection/eu-data-protection-rules_en), traces of human genetic information must be removed from the raw data before submitting it to ENA. A tool is included that filters out reads that map to the human genome using [Metagen-FastQC](https://github.com/Finn-Lab/Metagen-FastQC).

Select the filtering tool from the **Tools** panel on the left.


* Select human h38 reference genome (Fig. 4a).
* Choose single or paired-end (Fig. 4b)
* Select the files to clean (uploaded on the previous step, Fig. 4c)
* Click on *Execute* (Fig. 4d)

{% include image.html file="new_read_cleaning_tool.png" alt=" Read cleaning tool" caption="Figure 4. The interface of the read cleaning tool."%}


The tool will now process the raw reads to remove reads that map to the human genome. This can take a while. The resulting filtered data files are found on the right panel.

{% include warning.html content="Machines with 8GB or less of memory might not complete this step. A workaround this issue is to increase the size of the swap file or swap partition. See FAQ below." %}

{% include important.html content="The processed sequence file (human  reads removed) will have the same filename as the raw file but a **higher number** assigned by Galaxy." %}


### 5. Upload metadata and submit to ENA
The **ENA Upload tool** under **Submission tools** is used to generate the metadata in the right format, associate it with the sequence data files and submit everything to ENA. It is advisable to first test your submissions using the Webin test service where changes are not permanent and are erased every 24 hours. Do this by selecting **'Yes'** on **'Submit to test ENA server?''**.


Submission to ENA requires accompanying metadata that complies with the [ENA metadata model](https://ena-docs.readthedocs.io/en/latest/submit/general-guide/metadata.html).

The tool offers three ways of entering metadata for submission:
* Using the [metadata spreadsheet template](https://drive.google.com/file/d/1dulhBEfRO56ldCnuaIhjjtNbJDxQ5K1v/view?usp=sharing) (default, Fig. 5a)
* Interactively generating the metadata structure (Fig. 5b)
* Using the 4 tsv templates (legacy, Fig. 5c)

All three allow you to make a submission to either the test or production server of ENA. All metadata fields must be completed for the submission to go through. The submission tool will validate the metadata before submission.


{% include image.html file="3_ways_metadata.png" alt="2ways of submitting metadata" caption="Figure 5. Three ways of submitting the metadata through the ENA-upload tool."%}


#### Upload with the metadata spreadsheet template
For submission of a large number of files, we recommend to use the Excel template to upload the metadata. The template for SARS-Cov-2 submissions can be found [here](https://drive.google.com/file/d/1dulhBEfRO56ldCnuaIhjjtNbJDxQ5K1v/view?usp=sharing). The template is organized according to the ENA metadata model and contains one worksheet each for study, sample, experiment and run metadata:
- A **study (project)** groups together data submitted to the archive and controls its release date. A study accession is typically used when citing data submitted to ENA.
- A **sample** contains information about the sequenced source material. Samples are associated with checklists, which define the fields used to annotate the samples. Samples are always associated with a taxon.
- An **experiment** contains information about a sequencing experiment including library and instrument details.
- A **run** is part of an experiment and refers to data files containing sequence reads.


Use the *_alias* field on each sheet to interlink the experiments, studies, runs, samples and files with each other. The template can be downloaded, completed and uploaded using the Galaxy upload tool.

Complete the metadata template in your computer. **All fields of the template must be complete**. [Here](https://drive.google.com/file/d/1Z3LszV6IkgmcESsz2K7Mdv8pcnolUHT5/view?usp=sharing) you can find an example of part of the metadata associated with an actual submission to ENA (accession number PRJEB40711). Upload the metadata file to Galaxy, and select it on **'File based on templates here:'**.
Finally, select the human-filtered data files associated with the metadata, fill in the Affiliation center and click on 'Execute'.

{% include important.html content="The processed sequence file (human  reads removed) will have the same filename as the raw file but a **higher number** assigned by Galaxy." %}

#### Interactive metadata upload
For a small number of submissions, metadata is best entered interactively in Galaxy using the submission tool. Metadata fields are nested according to ENA metadata model described above.


#### Tabular (tsv) metadata tables (Legacy)
Four tsv files can be uploaded, one each for study, sample, experiment and run metadata. Example tsv files can be found [here](https://github.com/usegalaxy-eu/ena-upload-cli/tree/master/example_tables).
Export the completed tables to tsv files and upload them using Galaxy upload tool.

Next, select the human-filtered data files associated with the metadata and select the correct metadata file for each section. Finally, fill in the Affiliation center and click on 'Execute'.

### 6. Check for a valid submission

Visit [Webin online](https://www.ebi.ac.uk/ena/submit/webin) to check on your submissions or [dev Webin](https://wwwdev.ebi.ac.uk/ena/submit/webin) to check on test submissions. If everything looks fine, publish the data by changing the "Release Date" of the study to a day later than the current day. It can take several days for ENA to index the data and to let it appear in a correct manner. Covid-19 data will also be indexed by the [COVID-19 Data Portal](https://www.covid19dataportal.org/)

### 7. Stopping and deleting the container (optional)

The container can be stopped by simply closing the terminal. In this case the container will still be there. If your submission was successful and you don't need the instance anymore, you can delete the container and its corresponding image using following steps:

1. Check the name of your container you want to delete
    ```
    docker container list -a
    ```
2. Delete the container using its name (seen in the NAMES column)
    ```
    docker container rm NAME
    ```
3. Delete the image (when you don't want to use the galaxy instance in the forseeable future)\\
    **Linux/Windows:**
    ```
    docker rmi quay.io/galaxy/ena-upload
    ```
    **MacOS:**
    ```
    docker rmi quay.io/galaxy/ena-upload:hg38
    ```

## Frequently asked questions

#### Why is the reads cleaning tool not showing files for input?
You have uploaded sequence files, they appear in your history but you do not see them in the human reads cleaning tool. This issue is related to the sequence file format. If you uploaded uncompressed fastq files, you have to define the files as fastqsanger in Galaxy for the tool to accept them. This can be done during upload or by editing the file attributes in the history panel. More information of fastqsanger format can be found [here](https://galaxyproject.org/support/fastqsanger/)

#### Why do my outputs from reads cleaning have no sequence?
The output of the read cleaning tool is a small file (40Kb) with no sequences. This issue can be related to memory requirements.
The human reads cleaning tool uses [BWA Mem](http://bio-bwa.sourceforge.net/) for mapping reads to the human genome. This step is memory demanding.
A modestly specced workstation may become laggy and not finish the mapping step, resulting in no output sequence file. Increasing the swap file or swap partition size can help with this issue.

#### I Have "page not found" when visiting [http://localhost:8080/](http://localhost:8080/), what do I do?

Please wait a little longer. If the problem keeps occurring, please press ctrl-c to break the container startup and try again.

#### Why are no reference genomes available in the read cleaning tool?
If this problem occurs, pleas try using the docker container that has the human reference genome pre-included by using following command:

```
docker run -p "8080:80" quay.io/galaxy/ena-upload:hg38
```

#### Is my session lost after closing the terminal?
If you close the terminal, the container will be stopped, but will not be deleted. If you want to re-use this Galaxy session please run:

**Linux/Windows:**
```
docker start quay.io/galaxy/ena-upload
```

**MacOS:**
```
docker start quay.io/galaxy/ena-upload:hg38
```

#### Running the containers is taking a lot of storage space, is this normal?
If you are playing around with containers you might run into the fact that they can take up a lot of storage space. This can be avoided by deleting all your existing containers/images and volumes if you don't need them anymore. Use following commands to do so:

- Delete all containers /images and networks that are not in use 
    ```
    docker system prune -a 
    ```
 
- Delete volumes 
    ```
    docker volume rm $(docker volume ls -qf dangling=true) 
    ```


<!-- include table or link to table explaining all metadata fields. Use the same in Galaxy (include table at bottom) -->
