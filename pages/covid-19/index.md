---
title: Covid-19 data submission
permalink: covid-19/index.html
---

ELIXIR supports the [European Corona action plan](https://ec.europa.eu/info/sites/info/files/covid-firsteravscorona_actions.pdf) and plays an important role in the development of the [COVID-19 Data Portal](https://www.covid19dataportal.org). As the life-science data Research Infrastructure in Europe, ELIXIR is in a unique position to help increase the amount of publicly available Covid-related data and facilitate its processing, publication and reuse.

ELIXIR Belgium promotes and encourages the publication of all scientific data related to the Covid  pandemic and provides the tools, know-how and brokering services for researchers to do so. Our first action is to support the submission of SARS-Cov-2 nucleotide sequences to public repositories.

To achieve this, we have collaboratively developed and compiled Galaxy tools and workflows necessary to clean, assemble and submit SARS-CoV-2 sequences to the European Nucleotide Archive (ENA). There are many advantages of using Galaxy including a graphical user interface, access to tools and workflows for pre-processing, downstream analysis and visualization of sequences (including SARS-CoV-2-specific ones, Maier et al., 2021). Galaxy also provides a platform for sharing of data and metadata, facilitating international collaboration, integration with other public resources and enabling publishing FAIR data and analysis workflows.


## The tools
### Human reads cleaning tool
In order to comply with Europe’s General Data Protection Regulation [(GDPR)](https://ec.europa.eu/info/law/law-topic/data-protection/eu-data-protection-rules_en), traces of human genetic information must be removed from the raw data before submitting it to ENA. We have wrapped [Metagen-FastQC](https://github.com/Finn-Lab/Metagen-FastQC) as a Galaxy tool for this purpose.

### The ENA reads submission tool

Uploading [raw reads to ENA](https://ena-docs.readthedocs.io/en/latest/submit/general-guide.html) can be done using the website, webin-CLI or programmatically through curl commands.
Programmatic submissions are more convenient for bulk uploads, but require bioinformatic skills to generate the XML metadata files and to upload the data through ftp.
To address this, ELIXIR Belgium together with the lab of Björn Grüning have developed a python command line interface (CLI) that:
- Makes submission easier for bioinformaticians
- Generates the required XML files out of easier-to-use tsv files
- Takes care of the ftp uploading
- Validates the metadata before submission

The python package *ena-upload-cli* is published on [pip](https://pypi.org/project/ena-upload-cli/) and [bioconda](https://anaconda.org/bioconda/ena-upload-cli). For more information on how to use this tool please visit the github page of *[ena-upload-cli](https://github.com/usegalaxy-eu/ena-upload-cli)*.

### The Galaxy ENA reads submission tool
To make the process more user-friendly and allow most researchers without informatics experience to submit sequences to ENA without using command line, the tool was wrapped as a [Galaxy tool](https://toolshed.g2.bx.psu.edu/view/iuc/ena_upload/382518f24d6d). The ENA upload tool is part of the Intergalactic Utilities Commission (IUC), a curated collection of Galaxy tools. In [this repository](https://github.com/galaxyproject/tools-iuc/tree/master/tools/ena_upload) you can find all the information on how to install the tool yourself if you are administrator of a Galaxy instance .

### COVID-19 genome analysis workflows
We have included the COVID-19 variant discovery and consensus building Galaxy workflows by [Maier et al. (2001)](https://doi.org/10.1101/2021.03.25.437046). They allow the analysis of Illumina WGS and amplicon as well as ONT amplicon data.

### The Galaxy ENA consensus submission tool
A Galaxy wrapper of [ENA Webin-CLI](https://github.com/enasequence/webin-cli) submission tool was made to submit SARS-CoV-2 consensus data to ENA.


All these tools and workflows are included in a custom Galaxy Docker container for ease of deployment. This guide describes processing and submission of SARS-CoV-2 sequence data using the tools and workflows in this container. A [short introduction to Galaxy](https://training.galaxyproject.org/training-material/topics/introduction/tutorials/galaxy-intro-short/tutorial.html) is recommended for users unfamiliar with the platform.


## Overview of the submission process
The recommended workflow for SARS-CoV-2 sequence data process and submission using the Galaxy container is outlined in Figure 1.
There are four main steps in this workflow:
* Remove human traces from SARS-CoV-2 sequences (Fig. 1a)
* Submit raw reads to ENA (Fig. 1b) <!--- footnote with CLI (A tool to submit raw reads to ENA (command line)), also available at usegalaxy.eu--->
* Sequence analysis: variant detection and consensus building (Fig. 1c) <!--- Reference BioRXive paper --->
* Submit consensus sequences to ENA (Fig. 1d) <!--- based on Webin-CLI also available at usegalaxy.eu--->

{% include image.html file="recommended_dataflow.png" alt=" Recommended dataflow" caption="Figure 1. Recommended workflow for SARS-CoV-2 data process and submission."%}


We have divided the guide into two sections:
* [Cleaning and submitting SARS-Cov-2 raw sequence reads to ENA](sarscov2_submission) and
* [assembling and submitting consensus sequence of SARS-CoV-2 genomes to ENA](sarscov2_assembly_submission)


### Support for Belgian researchers

We provide support for Belgian researchers to submit data as a service, through the brokering mechanism of ENA. To this end, we host the dedicated Galaxy instance [covid19.useGalaxy.be](https://covid19.useGalaxy.be), which contains all the tools and workflows discussed here. For more information or to request access credentials contact *datasub at elixir-belgium.org*.



<!---  --->
