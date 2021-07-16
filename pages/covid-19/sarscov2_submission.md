---
title: Submission of SARS-Cov-2 raw reads to ENA.
keywords: [covid-19, SARS-Cov-2, ENA, data-submission, viral sequences]
summary: A guide to submit SARS-Cov-2 read data to ENA.
permalink: covid-19/sarscov2_submission.html
---

## General
This section explains how to set up the Galaxy Docker container and use it to remove human traces from raw data and to submit reads to ENA.


## Walkthrough of reads submission to ENA using the Galaxy container

A screencast is available on our youtube channel that will guide you through all the steps discussed below:

<iframe width="560" height="315" src="https://www.youtube.com/embed/POiQG-7O7rw" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>


## 1. Setting up the Galaxy container

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

## 2. Obtain and load ENA Webin submission credentials

An ENA [Webin account](https://www.ebi.ac.uk/ena/submit/sra/#registration) is required to upload data to the ENA. If you plan to offer this tool as a service to multiple users, then a brokering account is more suitable. To change your Webin account into a broker account, please contact ENA.

You can load your ENA credentials in Galaxy:
1. Login as admin using `admin` as username and `password` as password, this will give you full access to the galaxy instance.
2. Go to **User** > **Preferences** in the top navigation
3. Click on <i class="fa fa-user" aria-hidden="true"></i> **Manage Information**
4. Fill in the `Your ENA Webin account details`
5. Click **Save**

## 3. Upload data to Galaxy
This tool is used to submit raw reads to the ENA. Genome or transcriptome assemblies can be submitted to ENA using their website.
The submission tool currently accepts *fastq.gz* (SE and PE) file format.


Raw data can be uploaded using Galaxy's <i class="fa fa-upload"></i> upload tool found at the top right of the **Tools** panel (Fig. 1a) or at **Upload File from your computer** under **Upload Data** tool group (Fig. 1b).

{% include image.html file="upload_options.png" alt="Uploading files In Galaxy" caption="Figure 1. Data upload locations in Galaxy "%}


There are different options for uploading data files:
- Local files can be uploaded by drag-and-dropping to <i class="far fa-copy"></i> 'Drop files here' (Fig. 2a) area or by selecting <i class="fas fa-laptop"></i> 'Choose local files'(Fig. 2b) and browsing to the local files
- <i class="fas fa-edit"></i> 'Paste/Fetch data' (Fig 2c) allows fetching remote files from the web by entering a URL or pasting the data itself

{% include image.html file="upload_interface.png" alt="Upload menu" caption="Figure 2. Data upload options in Galaxy"%}

When the local files are selected or a URL is given, click "start" to start the uploading to Galaxy.
More information on data upload to Galaxy can be found in [Galaxy support](https://galaxyproject.org/support/loading-data/).


Your data should appear in green on the right history panel (Fig. 3). You can rename, tag, preview edit or delete data objects from here.
{% include image.html file="history_galaxy.png" alt="history galaxy" caption="Figure 3. Files that are uploaded will show up in the history panel."%}

The files need to be in *fastq.gz* or *fastq.bz2* compressed format. Galaxy will try to guess the datatype during upload. If it fails to do so correctly, you can <i class="fas fa-pencil-alt"></i> Edit the dataset's attibutes and manually change the <i class="fa fa-database"></i> datatype to *fastq.gz*.




## 4. Filter human reads out of the raw reads
In order to comply with Europe’s General Data Protection Regulation [(GDPR)](https://ec.europa.eu/info/law/law-topic/data-protection/eu-data-protection-rules_en), traces of human genetic information must be removed from the raw data before submitting it to ENA. A tool is included that filters out reads that map to the human genome using [Metagen-FastQC](https://github.com/Finn-Lab/Metagen-FastQC).

Select the filtering tool from the **Tools** panel on the left.



* Select human h38 reference genome (Fig. 4a).
* Choose single or paired-end (Fig. 4b)
* Select the files to clean (uploaded on the previous step, Fig. 4c). These can be <i class="far fa-file"></i>
 single or <i class="far fa-copy"></i> multiple files or a <i class="far fa-folder"></i> collection of files.
* Click on *Execute* (Fig. 4d)


<!-- include table or link to table explaining all metadata fields. Use the same in Galaxy (include table at bottom) -->




{% include image.html file="new_read_cleaning_tool.png" alt=" Read cleaning tool" caption="Figure 4. The interface of the read cleaning tool."%}


The tool will now process the raw reads to remove reads that map to the human genome. This can take a while. The resulting filtered data files are found on the right panel.

{% include warning.html content="Machines with 8GB or less of memory might not complete this step. A workaround this issue is to increase the size of the swap file or swap partition. See FAQ section." %}

{% include important.html content="The processed sequence file (human  reads removed) will have the same filename as the raw file but a **higher number** assigned by Galaxy." %}

## Optional: create a collection
Galaxy collections help you organize your data and minimize your history clutter. If you plan to use the [Galaxy COVID-19 genome analysis workflows]((https://rdm.elixir-belgium.org/covid-19/sarscov2_assembly_submission.html#7-run-the-variation-analysis-workflow)) you must organize your reads data into collections.
You can make collections for [single end](https://galaxyproject.org/tutorials/collections/#a-simple-collection-example) or [paired end datasets](https://galaxyproject.org/tutorials/collections/#a-paired-collection-example).

To make a collection of paired-end datasets, first select all PE datasets and select *Build List of Dataset Pairs* for all selected (Fig. 5).
**The names of the PE read files should be in the format 'pair_name' + '_1.fastq.gz' for the forward reads and 'pair_name' + '_2.fastq.gz' for the reverse reads.**
Galaxy will recognize the *_1/_2* suffix for PE reads (Fig. 6a). This is also the standard for PE file naming in ENA. If a different schema was used, it is best to change the filenames to the *_1.fastq.gz/_2.fastq.gz* naming schema. Make sure the names in the metadata are identical (see below) to the filenames.
The datasets are paired by name (Fig. 6b), and you can name the collection (Fig. 6c). Finally, click on *Create List* (Fig. 6d).

{% include image.html file="make_PE_collection.png" alt="make_PE_collection_menu" caption="Figure 5 Select datasets for paired-end collection (list of dataset pairs) ."%}

{% include image.html file="make_PE_collection_menu.png" alt="make_PE_collection_menu" caption="Figure 6 Create a collection of paired datasets ."%}







## 5. Upload metadata and submit to ENA
The **ENA Upload tool** under **Submission tools** is used to generate the metadata in the right format, associate it with the sequence data files and submit everything to ENA. It is advisable to first test your submissions using the Webin test service where changes are not permanent and are erased every 24 hours. Do this by selecting **'Yes'** on **'Submit to test ENA server?''**.


Submission to ENA requires accompanying metadata that complies with the [ENA metadata model](https://ena-docs.readthedocs.io/en/latest/submit/general-guide/metadata.html).

The tool offers three ways of entering metadata for submission:
* Using the [metadata spreadsheet template](https://drive.google.com/file/d/1dulhBEfRO56ldCnuaIhjjtNbJDxQ5K1v/view?usp=sharing) (default, Fig. 7a)
* Interactively generating the metadata structure (Fig. 7b)
* Using the 4 tsv templates (legacy, Fig. 7c)

All three allow you to make a submission to either the test or production server of ENA. All metadata fields must be completed for the submission to go through. The submission tool will validate the metadata before submission.


{% include image.html file="3_ways_metadata.png" alt="2ways of submitting metadata" caption="Figure 7. Three ways of submitting the metadata through the ENA-upload tool."%}


#### Upload with the metadata spreadsheet template
For submission of a large number of files, we recommend to use the Excel template to upload the metadata. The template for SARS-Cov-2 submissions can be found [here](https://drive.google.com/file/d/1dulhBEfRO56ldCnuaIhjjtNbJDxQ5K1v/view?usp=sharing). The template is organized according to the ENA metadata model and contains one worksheet each for study, sample, experiment and run metadata:
- A **study (project)** groups together data submitted to the archive and controls its release date. A study accession is typically used when citing data submitted to ENA.
- A **sample** contains information about the sequenced source material. Samples are associated with checklists, which define the fields used to annotate the samples. Samples are always associated with a taxon.
- An **experiment** contains information about a sequencing experiment including library and instrument details.
- A **run** is part of an experiment and refers to data files containing sequence reads.


Use the *_alias* field on each sheet to interlink the experiments, studies, runs, samples and files with each other. The template can be downloaded, completed and uploaded using the Galaxy upload tool.

Complete the metadata template in your computer. **All fields of the template must be complete**. [Here](https://drive.google.com/file/d/1Z3LszV6IkgmcESsz2K7Mdv8pcnolUHT5/view?usp=sharing) you can find an example of part of the metadata associated with an actual submission to ENA (accession number PRJEB40711). Upload the metadata file to Galaxy, and select it on **'File based on templates here:'**.
Finally, select the human-filtered data files associated with the metadata, fill in the Affiliation center and click on 'Execute'.


#### Interactive metadata upload
For a small number of submissions, metadata is best entered interactively in Galaxy using the submission tool. Metadata fields are nested according to ENA metadata model described above.

#### Tabular (tsv) metadata tables (Legacy)
Four tsv files can be uploaded, one each for study, sample, experiment and run metadata. Example tsv files can be found [here](https://github.com/usegalaxy-eu/ena-upload-cli/tree/master/example_tables).
Export the completed tables to tsv files and upload them using Galaxy upload tool.

#### Select data and submit
Next, select the human-filtered data files associated with the metadata and select the correct metadata file for each section.
This tool accepts individual datasets, mixed collections or paired-end collections.You can make collections for [single end](https://galaxyproject.org/tutorials/collections/#a-simple-collection-example) or [paired end datasets](https://galaxyproject.org/tutorials/collections/#a-paired-collection-example).


Finally, fill in the Affiliation center and click on 'Execute'. The output of a successful submission in Galaxy are four metadata tables (Fig. 8a) and a submission 'receipt' (Fig. 8b).

{% include important.html content="As well as submitting the data to ENA, this tool will generate a submission 'receipt', which contains most of the metadata needed for submitting consensus sequence to ENA, explained in [section 9](https://rdm.elixir-belgium.org/covid-19/sarscov2_assembly_submission.html#9-submit-consensus-sequence-to-ENA)" %}


{% include image.html file="succesful_reads_submission.png" alt="successful reads submission" caption="Figure 8. Output of a successful reads submission to ENA. The submission receipt contains metadata used for consensus sequence submission."%}



## 6. Check for a valid submission

Visit [Webin online](https://www.ebi.ac.uk/ena/submit/webin) to check on your submissions or [dev Webin](https://wwwdev.ebi.ac.uk/ena/submit/webin) to check on test submissions. If everything looks fine, publish the data by changing the "Release Date" of the study to a day later than the current day. It can take several days for ENA to index the data and to let it appear in a correct manner. Covid-19 data will also be indexed by the [COVID-19 Data Portal](https://www.covid19dataportal.org/)



<!-- include table or link to table explaining all metadata fields. Use the same in Galaxy (include table at bottom) -->
