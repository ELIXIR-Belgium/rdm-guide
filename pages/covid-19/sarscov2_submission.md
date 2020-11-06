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
To make the process more user-friendly and allow most researchers without informatics experience to submit sequences to ENA without using command line, the tool was wrapped as a [Galaxy tool](https://testtoolshed.g2.bx.psu.edu/repository?repository_id=e6d3d594449ee3f8) and put in a container.

The Galaxy container allows the user to :
- remove human traces from raw reads
- input or upload metadata
- submit reads and metadata to ENA and
- analyze SARS-Cov-2 sequences

A [short introduction to Galaxy](https://training.galaxyproject.org/training-material/topics/introduction/tutorials/galaxy-intro-short/tutorial.html) is recommended for users unfamiliar with the platform.
Instructions for building and running the container locally are found in this [github repository](https://github.com/ELIXIR-Belgium/ena-upload-container).


## Walkthrough of ENA submission using the Galaxy container


### 0. Register at the ENA

An ENA [Webin account](https://www.ebi.ac.uk/ena/submit/sra/#registration) is required to upload data to the ENA.
When running the container, the Webin account ID is passed on to the WEBIN_ID parameter in the following format: Webin-XXXXX. This is a requirement for running the container.

If you plan to offer this tool as a service to multiple users, then a brokering account is more suitable. To change your Webin account into a broker account, please contact ENA.




### 1. Upload data to Galaxy
This tool is used to submit raw reads to the ENA. Genome or transcriptome assemblies can be submitted to ENA using their website.
The tool currently accepts *fastq.gz* (SE and PE) file format.

Raw data can be uploaded using Galaxy's upload tool found at the top right of the **Tools** panel (Fig. 1a) or at 'Upload File from your computer' under 'Upload Data' tool group (Fig. 1b).

{% include image.html file="upload_options.png" alt="Uploading files In Galaxy" caption="Figure 1. Data upload locations in Galaxy "%}


The data upload
There are different options for uploading data files:
- Local files can be uploaded by drag-and-dropping to 'Drop files here' (Fig. 2a) area or selecting  'Choose local files'(Fig. 2b) and browsing to the local files
- 'Paste/Fetch data' (Fig 2c) allows fetching remote files from the web by entering a URL or pasting the data itself (Fig. 3)

{% include image.html file="upload_interface.png" alt="Upload menu" caption="Figure 2. Data upload options in Galaxy"%}

{% include image.html file="paste_fetch_data.png" alt="paste_fetch menu" caption="Figure 3. Paste/Fetch data"%}


When the local files are selected or a URL is given, click "start" to start the uploading to Galaxy.

More information on data upload to Galaxy can be found in [Galaxy support](https://galaxyproject.org/support/loading-data/).



Your data should appear in green on the right history panel (Fig. 4). You can rename, tag, preview edit or delete data objects from here.
{% include image.html file="history_galaxy.png" alt="history galaxy" caption="Figure 4. Files that are uploaded will show up in the history panel."%}


### 2. Filter human reads out of the raw reads
In order to comply with Europe’s General Data Protection Regulation [(GDPR)](https://ec.europa.eu/info/law/law-topic/data-protection/eu-data-protection-rules_en), traces of human genetic information must be removed from the raw data before submitting it to ENA. A tool is included that filters out reads that map to the human genome using [Metagen-FastQC](https://github.com/Finn-Lab/Metagen-FastQC).

Select the filtering tool from the **Tools** panel on the right.

* Select human h38 reference genome (Fig. 5a).
* Choose single or paired end (Fig. 5b)
* Select the files to clean (uploaded on the previous step, Fig. 5c)
* Click on *Execute* (Fig. 5d)

{% include image.html file="new_read_cleaning_tool.png" alt="Figure 5. Read cleaning tool" caption="The interface of the read cleaning tool."%}

The tool will now process the raw reads to remove reads that map to the human genome. This can take a while. The resulting filtered data files are found on the right panel.

### 3. Upload metadata and submit
Submission to ENA requires accompanying metadata that complies with the [ENA metadata model](https://ena-docs.readthedocs.io/en/latest/submit/general-guide/metadata.html).
The tool offers two ways of entering metadata for submission: interactively or via a metadata template (Fig. 6). All metadata fields must be completed for the submission to go through. Both ways allow you to make a test submission to the server of ENA. The submission tool will validate the metadata before submission.

{% include image.html file="2_ways_ena_tool.png" alt="2ways of submitting metadata" caption="Figure 6. Two ways of submitting the metadata through the ENA-upload tool."%}


#### Interactive metadata upload
For a small number of submissions, metadata is best entered interactively by completing all the boxes. Metadata fields are nested according to ENA metadata model:
- A **study (project)** groups together data submitted to the archive and controls its release date. A study accession is typically used when citing data submitted to ENA.
- A **sample** contains information about the sequenced source material. Samples are associated with checklists, which define the fields used to annotate the samples. Samples are always associated with a taxon.
- An **experiment** contains information about a sequencing experiment including library and instrument details.
- A **run** is part of an experiment and refers to data files containing sequence reads.

At the bottom, select the filtered data files associated with the metadata.

At last, fill in the Affiliation center and click on execute.

{% include image.html file="execute_ena_upoad.png" alt="Affiliation center and execute button" caption="Affiliation field and execute button."%}

#### Upload with the metadata template
For submission of a large number of files, it is recommended to use the spreadsheet template to upload the metadata. The template for SARS-Cov-2 submissions can be found [here](https://drive.google.com/file/d/1dulhBEfRO56ldCnuaIhjjtNbJDxQ5K1v/view?usp=sharing). The template is organized according to the ENA metadata model and contains one worksheet each for study, sample, experiment and run metadata. Use the alias column to interlink the experiments, studies, runs, samples and files with each other. The template can be downloaded, completed and uploaded using the Galaxy upload tool.

Open the spreadsheet in your computer. **All fields of the template must be complete**. [Here](https://drive.google.com/file/d/1Z3LszV6IkgmcESsz2K7Mdv8pcnolUHT5/view?usp=sharing) you can find an example of part of the metadata associated with a submission to ENA using this tool (accession number PRJEB40711).

Export the tables to tsv files and upload the completed metadata template using Galaxy upload tool. Select the correct spreadsheets in the tool together with the correct data. If the data is uploaded correctly, they should appear in the "Select all datasets to upload" section.

At last, fill in the Affiliation center and click on execute.

{% include image.html file="execute_ena_upoad.png" alt="Affiliation center and execute button" caption="Affiliation field and execute button."%}


### 4. Check for a valid submission

Visit [Webin online](https://www.ebi.ac.uk/ena/submit/webin) to check on your submissions or [dev Webin](https://wwwdev.ebi.ac.uk/ena/submit/webin) to check on test submissions. If everything looks fine, publish the data by changing the "Release Date" of the study to a day later than the current day. It can take several days for ENA to index the data and to let it appear in a correct manner. Covid-19 data will also be indexed by the [COVID-19 Data Portal](https://www.covid19dataportal.org/)




<!-- include table or link to table explaining all metadata fields. Use the same in Galaxy (include table at bottom) -->
