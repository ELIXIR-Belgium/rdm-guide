---
title: Submission of SARS-Cov-2 DNA sequences to public repositories
keywords: covid-19, SARS-Cov-2, ENA, data-submission, viral sequences
summary: A guide to submit SARS-Cov-2 sequence data to different repositories.
permalink: covid-19/sarscov2_submission.html
---

{% include note.html content="The content in this page is not final." %}

## General

ELIXIR Belgium has developed a galaxy tool for submission of SARS-Cov-2 genetic sequences and associated metadata to public repositories, namely the European Nucleotide Archive ([ENA](https://www.ebi.ac.uk/ena/browser/home)) and in the future [GISAID](https://www.gisaid.org/). The tool is packaged in a Galaxy container for easy distribution. It can be run locally or via ELIXIR Belgium’s Covid-19-dedicated Galaxy instance. A [short introduction to Galaxy](https://training.galaxyproject.org/training-material/topics/introduction/tutorials/galaxy-intro-short/tutorial.html) is recommended for users unfamiliar with the platform.

## Using the tool

The tool runs in a Galaxy environment. We offer 2 possibilities to run the tool:

### Running a container
A Galaxy container was created containing the tools to clean raw reads and our galaxy tool to upload them to ENA.
Instructions for building and running the container locally are found in this [github repository](https://github.com/ELIXIR-Belgium/ena-upload-container).
This option is suited for people outside of Belgium.

### ELIXIR Belgium Covid-19 Galaxy instance
ELIXIR Belgium developed and maintains *usegalaxy.be/covid-19*, a custom tailored public Galaxy instance for Belgian researchers submitting SARS-Cov-2 genetic sequences to public repositories. At the moment, submissions to ENA are supported. You can apply for credentials for usegalaxy.be/covid-19 by contacting our [Galaxy admin](galaxy@elixir-belgium.org). ELIXIR Belgium holds a brokering account with ENA which is used for all submissions via *usegalaxy.be/covid-19*. This means Belgian researchers submitting sequences don't need an ENA account.

## Working with broker accounts

In order to upload to ENA, it is required to have the credentials of an ENA [Webin account](https://www.ebi.ac.uk/ena/submit/sra/#registration). The WEBIN_ID parameter makes use of the full username looking like: Webin-XXXXX. This is required when running the container.

If you plan to offer this tool as a service to multiple users, then a brokering account is more suitable. To change your Webin account into a broker account, please contact ENA.

{% include note.html content=" **_usegalaxy.be users_** don't need a Webin account. ELIXIR Belgium holds a brokering account with ENA which is used for all submissions." %}

## Submission to ENA
Uploading [raw reads to ENA](https://ena-docs.readthedocs.io/en/latest/submit/general-guide.html) can be done using the website, webin-CLI or programmatically through curl commands.
Programmatic submissions are more convenient for bulk uploads, but require bioinformatic skills to generate the XML metadata files and to upload the data through ftp.
To address this, ELIXIR Belgium together with the lab of Björn Grüning have developed a python command line interface (CLI) that:
- Makes submission easier for bioinformaticians
- Generates the required XML files out of easier-to-use tsv files
- Takes care of the ftp uploading
- Validates the metadata before submission

The python package *ena-upload-cli* is published on [pip](https://pypi.org/project/ena-upload-cli/) and [bioconda](https://anaconda.org/bioconda/ena-upload-cli). For more information on how to use this tool please visit the github page of *[ena-upload-cli](https://github.com/usegalaxy-eu/ena-upload-cli)*.

To make the process more user-friendly and allow most researchers without informatics experience to submit sequences to ENA without using command line, the tool was wrapped as a [Galaxy tool](https://testtoolshed.g2.bx.psu.edu/repository?repository_id=e6d3d594449ee3f8) and put in a container. This container can be downloaded and run locally or used on a public galaxy instance as discussed above.


## Walkthrough of ENA submission in Galaxy
### 0. Register and login to Galaxy (usegalaxy.be only)

You must apply for login credentials with our [Galaxy admin](galaxy@elixir-belgium.org). ELIXIR Belgium holds a brokering account with ENA which is used for all submissions. Go to *usegalaxy.be/covid-19* and login. %}

### 1. Uploading data to Galaxy
ENA will accept only raw read files via programmatic submissions (this tool). Genome or transcriptome assemblies can be submitted to ENA using the the ENA website.
ENA will accept *fastq.gz* (SE and PE), *bam* and *cram* formats.

Raw data can be uploaded using uploaded using `Upload File`, found at the top of the **Tools** panel:

{% include image.html file="uploading_files_galaxy.png" alt="Uploading files In Galaxy" caption="Uploading data to Galaxy"%}

There are different recommended options for uploading the read data:
- Load by "browsing" for a local file. Best for small datasets. Some servers will support load data that is 2 GB or larger. If you are having problems with this method, try FTP.
- Load using an HTTP URL or FTP URL.

When the local files are selected or a url is given, click "start" to start the uploading to Galaxy.

More information on data upload to Galaxy can be found in [Galaxy support](https://galaxyproject.org/support/loading-data/).

Your data should appear on the right panel in green. You can rename, tag, preview edit or delete data objects from here.
{% include image.html file="history_galaxy.png" alt="history galaxy" caption="Files that are uploaded will show up in the history panel."%}


### 2. Filter human reads out of the raw reads
In order to comply with Europe’s General Data Protection Regulation [(GDPR)](https://ec.europa.eu/info/law/law-topic/data-protection/eu-data-protection-rules_en), traces of human genetic information must be removed from the raw data before submitting it to ENA. A tool is included that filters out reads that map to the human genome using [Metagen-FastQC](https://github.com/Finn-Lab/Metagen-FastQC).

Select the filtering tool from the **Tools** panel on the right.

* Select human h38 reference genome.
* Choose single or paired end
* Select the uploaded files
* Click on *Execute*

{% include image.html file="read_cleaning_tool.png" alt="Read cleaning tool" caption="The interface of the read cleaning tool."%}

The tool will now process the raw reads to remove reads that map to the human genome. This can take a while. The resulting filtered data files are found on the right panel. 

### 3. Uploading the data accompanied with the metadata
Submission to ENA requires accompanying metadata that complies with the [ENA metadata model](https://ena-docs.readthedocs.io/en/latest/submit/general-guide/metadata.html).
The tool offers two ways of entering metadata for submission: interactively or via a metadata template. All metadata fields must be completed for the submission to go through.


#### Interactive metadata upload
For a small number of submissions, metadata is best entered interactively by completing all the boxes. Metadata fields are nested according to ENA metadata model:
- A **study (project)** groups together data submitted to the archive and controls its release date. A study accession is typically used when citing data submitted to ENA.
- A **sample** contains information about the sequenced source material. Samples are associated with checklists, which define the fields used to annotate the samples. Samples are always associated with a taxon.
- An **experiment** contains information about a sequencing experiment including library and instrument details.
- A **run** is part of an experiment and refers to data files containing sequence reads.

At the bottom, select the filtered data files associated with the metadata.


#### Upload with metadata template
For submission of a large number of files, a metadata template is available with the container. The template is organized according to the ENA metadata model and contains one worksheet each for study, sample, experiment and run metadata. The template can be downloaded, completed and uploaded using the Galaxy upload tool.

Download the metadata template.
<!-- screenshot of the metadata download 'button' -->
Open the spreadsheet in your computer. **All fields of the template must be complete**. [Here](https://drive.google.com/file/d/1Z3LszV6IkgmcESsz2K7Mdv8pcnolUHT5/view?usp=sharing) you can find an example of part of the metadata associated with a submission to ENA using this tool (accession number PRJEB40711).

Upload the completed metadata template using Galaxy upload tool.

{% include image.html file="ena_upload_tool_1.png" alt="ENA upload tool" caption="ENA upload tool."%}



### 4. Check for a valid submission

Go to ENA ....

It can take several days for ENA to index the pag etc...

{% include note.html content="**_usegalaxy.be users:_** After submission, the study will have a default embargo. As submission broker, ELIXIR Belgium will review the submission and remove the embargo." %}


<!-- include table or link to table explaining all metadata fields. Use the same in Galaxy (include table at bottom) -->
