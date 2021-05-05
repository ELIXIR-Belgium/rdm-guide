---
title: ArrayExpress
---
## ArrayExpress features
### How to submit data
[ArrayExpress submission overview](https://www.ebi.ac.uk/arrayexpress/submit/overview.html).

### Non-Personal vs Personal data
[Non-personal data](https://www.ebi.ac.uk/arrayexpress/help/data_availability.html).

### Access to data
[Open, public](https://www.ebi.ac.uk/arrayexpress/help/FAQ.html#data_restrictions).

### Embargo
[Possible (private access)](https://www.ebi.ac.uk/arrayexpress/help/data_availability.html#general).

### Data licence
Not specified. However, there are no restrictions on the use of data obtained through ArrayExpress. All public data from ArrayExpress can be used by anyone and the services are completely free of charge ([ArrayExpress FAQ](https://www.ebi.ac.uk/arrayexpress/help/FAQ.html#data_restrictions)).

### Data/Experiment types
Genetic and epigenetic regulation of transcriptome. List of [experiment types in ArrayExpress](https://www.ebi.ac.uk/arrayexpress/help/experiment_types.html).

### Metadata
ArrayExpress users should have everything they need for the data set to make sense and be reproducible without necessarily referring to an associated paper.  
* Microarray submissions follow the "Minimum Information About a Microarray Experiment" [(MIAME)](http://fged.org/projects/miame/) guidelines.
* Sequencing submissions follow the "Minimum Information About a Sequencing Experiment" [(MINSEQE)](http://fged.org/projects/minseqe/) guidelines.

More specifically, data submission to ArrayExpress occurs through [Annotare submission tool](https://www.ebi.ac.uk/fg/annotare/login/). For each sample, Annotare requires the following metadata fields (or attributes), according to studied organism:\\
*Organism, organism part, developmental stage, age, genotype, disease, individual, sex, cell line, cell type, cultivar, strain and material type*.\\
The meaning of these attributes is specified by [EFO ontology](https://www.ebi.ac.uk/ols/ontologies/efo).

About  [Sequencing Library Information](https://www.ebi.ac.uk/fg/annotare/help/seq_lib_spec.html), Annotare follows the requirements of the [European Nucleotide Archive (ENA)](https://www.ebi.ac.uk/ena/about).

### Ontology
[Experimental Factor Ontology (EFO)](https://www.ebi.ac.uk/ols/ontologies/efo). EFO provides a systematic description of many experimental variables available in EBI databases.

### Data documentation
Annotare doesn’t allow upload of README file. All relevant information about the data need to be provided in the designated fields:\\
*general information, contacts, publications and describe protocols*.

### File format(s)
* Raw data
  * Microarray: files obtained from the microarray scanner (e.g. Affymetrix CEL files, Agilent feature extraction txt files, Illumina idat files). See the full list of [accepted raw microarray file formats](https://www.ebi.ac.uk/fg/annotare/help/accepted_raw_ma_file_formats.html).
  * Sequencing: compressed raw sequence read files (e.g. fastq.gz files). See the full list of [accepted raw sequencing file formats](https://www.ebi.ac.uk/arrayexpress/help/UHTS_submissions.html#HowToSubmit).

* Processed data
  * Processed data matrix in tab-delimited txt format.
  * Other processed data formats, e.g. bam alignment files (optional).

### Data volume and costs
No limit for data volume. No costs.

### Data quality
The submission process to ArrayExpress, through Annotare, includes **validation** and **curation** steps. When you pass validation in Annotare and submit the experiment, you are automatically sent an accession number, usually within 24 hours. The experiment is then in curation, a process which can take up to 5-10 working days, depending on the complexity of your submission and whether major improvements are required.

### Identifiers
Experiments and array designs in ArrayExpress are given **unique accession numbers**. You can use the accession number to [cite](https://www.ebi.ac.uk/arrayexpress/help/FAQ.html#cite) the dataset deposited in ArrayExpress.

## Tips about data submission
1.  **Make your metadata spreadsheet by using Annotare, at the beginning of the study.**\\
Before collecting or generating data, login into Annotare and create one “experiment submission” for your dataset. Note that Annotare will ask you for the technology and name of the array, and applies it to the whole submission. If you have used [different types of technologies for the same set of samples](https://www.ebi.ac.uk/arrayexpress/help/pre-submission_checklist.html), Annotare asks you to create separate submissions.
  * Define the attributes and the variables that you need to describe your samples, in addition to the mandatory ones, and take advantage of the suggested metadata fields.
  * Add just a few samples as rows, in order to select the right terms (from EFO ontology) under each attribute to annotate your samples.
  * Select some text in the ENA library Information section. It could just be temporary information; it is only needed to add ENA library metadata fields in your spreadsheet.
  * Add the minimum protocols and any other suggested protocols that you might need, even by just typing a few letters in the text area; you can add the correct text when you perform the experiment.
  * Click on **“Save as Spreadsheets”**. Two spreadsheets will be downloaded, *idf* and *sdfr* files, that can be opened as Excel files. You can rename and save them on the cloud storage service recommended by your institution.

2.  **Use idf and sdrf as template for your study.**\\
You can use the *idf* file as a generic [metadata](metadata) sheet to describe “Investigation Title”, “Experimental Factor”, “Protocols” etc, according to EFO ontology, and the *sdrf* file to describe individual observations/samples and measurements during the project.

3.  **Add ontology and/or control vocabulary in the template.**\\
You can use [RightField](https://rightfield.org.uk) to embed any [ontology](ontology) into the metadata fields of the template (*idf* and/or *sdrf* files) and then save it as a simple Excel file. You can also create a [controlled vocabulary dropdown lists using Excel](https://support.microsoft.com/en-us/office/create-a-drop-down-list-7693307a-59ef-400a-b769-c5402dce407b?ui=en-us&rs=en-us&ad=us).

4.  **Copy the template into Annotare at the end of the study.**\\
Using such a template to record (meta)data and measurements about your observations/samples during the study, allows you to easily submit data into Annotare at the end of the study, just by copying all the needed information into the submission tool. Moreover, the template could be reused and/or adapted for other studies in your project.
