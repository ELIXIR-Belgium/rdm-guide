---
title: Galaxy container html
permalink: covid-19/galaxy_container.html
---



<h1>Hello, your <strong>ENA-upload Galaxy</strong> container is running!</h1><br>
<p> This container is optimized to clean human reads from raw reads and to upload them to
    ENA,
    this in only a few steps. The ENA uploading is based on the tool ena-upload-cli while
    the
    reads cleaning tool is based on Metagen-FastQC workflow.
</p>

## 0. Register at the ENA

An ENA [Webin account](https://www.ebi.ac.uk/ena/submit/sra/#registration) is required to upload data to the ENA.
When running the container, the Webin account ID is passed on to the WEBIN_ID parameter in the following format: Webin-XXXXX. This is a requirement for running the container.

If you plan to offer this tool as a service to multiple users, then a brokering account is more suitable. To change your Webin account into a broker account, please contact ENA.


## 1. Upload data to Galaxy
This tool is used to submit raw reads to the ENA. Genome or transcriptome assemblies can be submitted to ENA using their website.
The submission tool currently accepts *fastq.gz* (SE and PE) file format. The human reads cleaning tool accepts uncompressed *fastq* files and will output in compressed format.

Raw data can be uploaded using Galaxy's upload tool found at the top right of the **Tools** panel (Fig. 1a) or at 'Upload File from your computer' under 'Upload Data' tool group (Fig. 1b).

{% include image.html file="upload_options.png" alt="Uploading files In Galaxy" caption="Figure 1. Data upload locations in Galaxy "%}


There are different options for uploading data files:
- Local files can be uploaded by drag-and-dropping to 'Drop files here' (Fig. 2a) area or by selecting  'Choose local files'(Fig. 2b) and browsing to the local files
- 'Paste/Fetch data' (Fig 2c) allows fetching remote files from the web by entering a URL or pasting the data itself

{% include image.html file="upload_interface.png" alt="Upload menu" caption="Figure 2. Data upload options in Galaxy"%}

When the local files are selected or a URL is given, click "start" to start the uploading to Galaxy.
More information on data upload to Galaxy can be found in [Galaxy support](https://galaxyproject.org/support/loading-data/).


Your data should appear in green on the right history panel (Fig. 3). You can rename, tag, preview edit or delete data objects from here.
{% include image.html file="history_galaxy.png" alt="history galaxy" caption="Figure 3. Files that are uploaded will show up in the history panel."%}


## 2. Filter human reads out of the raw reads
In order to comply with Europe’s General Data Protection Regulation [(GDPR)](https://ec.europa.eu/info/law/law-topic/data-protection/eu-data-protection-rules_en), traces of human genetic information must be removed from the raw data before submitting it to ENA. A tool is included that filters out reads that map to the human genome using [Metagen-FastQC](https://github.com/Finn-Lab/Metagen-FastQC).

Select the filtering tool from the **Tools** panel on the right.


* Select human h38 reference genome (Fig. 4a).
* Choose single or paired-end (Fig. 4b)
* Select the files to clean (uploaded on the previous step, Fig. 4c)
* Click on *Execute* (Fig. 4d)

{% include image.html file="new_read_cleaning_tool.png" alt=" Read cleaning tool" caption="Figure 4. The interface of the read cleaning tool."%}


The tool will now process the raw reads to remove reads that map to the human genome. This can take a while. The resulting filtered data files are found on the right panel.

{% include important.html content="The processed sequence file (human  reads removed) will have the same filename as the raw file but a **higher number** assigned by Galaxy." %}


## 3. Upload metadata and submit to ENA
The **ENA Upload tool** under *Submission tools* is used to generate the metadata in the right format, associate it with the sequence data files and submit everything to ENA. It is advisable to first test your submissions using the Webin test service where changes are not permanent and are erased every 24 hours. Do this by selecting **'Yes'** on **'Submit to test ENA server?''**.


Submission to ENA requires accompanying metadata that complies with the [ENA metadata model](https://ena-docs.readthedocs.io/en/latest/submit/general-guide/metadata.html).

The tool offers three ways of entering metadata for submission:
* Using the Excel template (default, Fig. 5a)
* Interactively generating the metadata structure (Fig. 5b)
* Using the 4 tsv templates (legacy, Fig. 5c)

All three allow you to make a submission to either the test or production server of ENA. All metadata fields must be completed for the submission to go through. The submission tool will validate the metadata before submission.


{% include image.html file="3_ways_metadata.png" alt="2ways of submitting metadata" caption="Figure 5. Three ways of submitting the metadata through the ENA-upload tool."%}


### Upload with the metadata spreadsheet template
For submission of a large number of files, we recommend to use the Excel template to upload the metadata. The template for SARS-Cov-2 submissions can be found [here](https://drive.google.com/file/d/1dulhBEfRO56ldCnuaIhjjtNbJDxQ5K1v/view?usp=sharing). The template is organized according to the ENA metadata model and contains one worksheet each for study, sample, experiment and run metadata:
- A **study (project)** groups together data submitted to the archive and controls its release date. A study accession is typically used when citing data submitted to ENA.
- A **sample** contains information about the sequenced source material. Samples are associated with checklists, which define the fields used to annotate the samples. Samples are always associated with a taxon.
- An **experiment** contains information about a sequencing experiment including library and instrument details.
- A **run** is part of an experiment and refers to data files containing sequence reads.


Use the *_alias* field on each sheet to interlink the experiments, studies, runs, samples and files with each other. The template can be downloaded, completed and uploaded using the Galaxy upload tool.

Complete the metadata template in your computer. **All fields of the template must be complete**. [Here](https://drive.google.com/file/d/1Z3LszV6IkgmcESsz2K7Mdv8pcnolUHT5/view?usp=sharing) you can find an example of part of the metadata associated with an actual submission to ENA (accession number PRJEB40711). Upload the metadata file to Galaxy, and select it on **'File based on templates here:'**.
Finally, select the human-filtered data files associated with the metadata, fill in the Affiliation center and click on execute.

{% include important.html content="The processed sequence file (human  reads removed) will have the same filename as the raw file but a **higher number** assigned by Galaxy." %}

### Interactive metadata upload
For a small number of submissions, metadata is best entered interactively in Galaxy using the submission tool. Metadata fields are nested according to ENA metadata model described above.
At the bottom, select the human-filtered data files associated with the metadata, fill in the Affiliation center and click on execute.


### Tabular (tsv) metadata tables (Legacy)
Four tsv files can be uploaded, one each for study, sample, experiment and run metadata. Example tsv files can be found [here](https://github.com/usegalaxy-eu/ena-upload-cli/tree/master/example_tables).
Export the completed tables to tsv files and upload them using Galaxy upload tool.

Next, select the human-filtered data files associated with the metadata and select the correct metadata file for each section. Finally, fill in the Affiliation center and click on execute.



## 4. Check for a valid submission

Visit [Webin online](https://www.ebi.ac.uk/ena/submit/webin) to check on your submissions or [dev Webin](https://wwwdev.ebi.ac.uk/ena/submit/webin) to check on test submissions. If everything looks fine, publish the data by changing the "Release Date" of the study to a day later than the current day. It can take several days for ENA to index the data and to let it appear in a correct manner. Covid-19 data will also be indexed by the [COVID-19 Data Portal](https://www.covid19dataportal.org/)


## 5. Known issues

### The reads cleaning tool shows no files for input
You have uploaded sequence files, they appear in your history but you do not see them in the human reads cleaning tool. This issue is related to the sequence file format. If you uploaded uncompressed fastq files, you have to define the files as fastqsanger in Galaxy for the tool to accept them. This can be done during upload or by editing the file attibutes in the history panel. More information of fastqsanger format can be found [here](https://galaxyproject.org/support/fastqsanger/)

#### Output from reads cleaning has no sequence
The output of the read cleaning tool is a small file (40Kb) with no sequences. This issue can be related to memory requirements.
The human reads cleaning tool uses [BWA Mem](http://bio-bwa.sourceforge.net/) for mapping reads to the human genome. This step is memory demanding.
A modestly specced workstation may become laggy and not finish the mapping step, resutling in no output sequence file. Increasing the swap file or swap partition size can help with this issue.


<!-- include table or link to table explaining all metadata fields. Use the same in Galaxy (include table at bottom) -->
