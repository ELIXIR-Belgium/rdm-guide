---
title: Submission of SARS-Cov-2 DNA sequences to public repositories
keywords: covid-19, SARS-Cov-2, ENA, data-submission, viral sequences
summary: A guide to submit SARS-Cov-2 sequence data to different repositories.
permalink: covid-19/sarscov2_submission.html
---

## General

ELIXIR Belgium has developed a galaxy tool for submission of SARS-Cov-2 genetic sequences and associated metadata to public repositories, namely the European Nucleotide Archive and in the future GISAID. The tool is packaged in a Galaxy container for easy distribution. It can be run locally or via ELIXIR Belgium’s Covid-19-dedicated Galaxy instance. A [short introduction to Galaxy](https://training.galaxyproject.org/training-material/topics/introduction/tutorials/galaxy-intro-short/tutorial.html) is recommended for users unfamiliar with the platform.

## How to start using the tool

Since our tool is a Galaxy tool, it needs to run in a Galaxy environment. We offer 2 possibilities to run the tool:

### Running a container
A Galaxy container was created containing the tools to clean raw reads and our galaxy tool to upload them to ENA.
Instructions for building and running the container locally are found in this [github repository](https://github.com/ELIXIR-Belgium/ena-upload-container).
This option is suited for people outside of Belgium.

### ELIXIR Belgium Covid-19 Galaxy instance
ELIXIR Belgium developed and maintains usegalaxy.be/covid-19, a custom tailored public Galaxy instance for the purpose of submitting Belgian SARS-Cov-2 genetic sequences to public repositories. At the moment, submissions to ENA are supported.

## Working with broker accounts

## Submission to ENA

Uploading [raw reads to ENA](https://ena-docs.readthedocs.io/en/latest/submit/general-guide.html) can be done using the website, webin-CLI or programmatically through curl commands. With the increasing amount of covid-19 data being generated, our preferred way is programmatically enabling bulk uploads. Since this process can be quite cumbersome, it narrows down the possible unloaders to an experienced bioinformatition. This is mainly due to the fact that the metadata needs to be provided through XML files, a file format that is not userfreindly and the data needs to be uploaded though ftp. The first step in improving the programmatic submission to ENA was to develop a python command line interface (CLI) that would:
- Make submission easier for bioinformaticions
- Generate the XMLs out of easier to use tsv files
- Taking care of the ftp uploading
- Validate the metadata before submission

This was accomplished together with the lab of Björn Grüning in the python package ena-upload-cli which is published on [pip](https://pypi.org/project/ena-upload-cli/) and [bioconda](https://anaconda.org/bioconda/ena-upload-cli). For more information on how to use this tool please visit the github page of [ena-upload-cli](https://github.com/usegalaxy-eu/ena-upload-cli). As this is already a big improvement, command line tools are not the kind of software you hand over to researchers without some informatics experience. This is were to galaxy [tool wrapper](https://testtoolshed.g2.bx.psu.edu/repository?repository_id=e6d3d594449ee3f8) falls in place which is shipped in a galaxy container or used on a public galaxy instance as discussed above.

### Data upload
Raw data is uploaded using Galaxy upload tool:

{% include image.html file="galaxy_data_upload.png" alt="Jekyll" caption="Glaxaxy data ENA upload" %}

There are different options for uploading data:
- Load by "browsing" for a local file. Best for small datasets. Some servers will support load data that is 2 GB or larger. If you are having problems with this method, try FTP.
- Load using an HTTP URL or FTP URL.
- Load a few lines of plain text.
- Load using FTP. Either line command or with a desktop client.

More information on data upload to Galaxy can be found in [Galaxy support](https://galaxyproject.org/support/loading-data/).

### Filter human reads
In order to comply with Europe’s General Data Protection Regulation [(GDPR)](https://ec.europa.eu/info/law/law-topic/data-protection/eu-data-protection-rules_en), traces of human genetic information must be removed from the raw data before submitting it to ENA. A tool is included that filters out reads that map to the human genome using [Metagen-FastQC](https://github.com/Finn-Lab/Metagen-FastQC).

### Metadata
Submission to ENA requires accompanying metadata that complies with the [ENA metadata model](https://ena-docs.readthedocs.io/en/latest/submit/general-guide/metadata.html).
The tool offers two ways of entering metadata for submission: interactively or via a metadata template. All metadata fields must be completed for the submission to go through.



### Interactive metadata upload
For a small number of submissions, metadata is best entered interactively by completing all the boxes. Metadata fields are nested according to ENA metadata model:
- **Study**
- **Sample**
- **Experiment**
- **Run**

At the bottom, select the files associated with the metadata.

<!-- here we can have screenshots of each metadata section -->

### Bulk metadata upload
For submission of a large number of files, a metadata template is available with the container. The template can be downloaded, completed and uploaded using the Galaxy upload tool.

<!-- include table or link to table explaining all metadata fields. Use the same in Galaxy (include table at bottom) -->
