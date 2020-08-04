---
title: Data documentation
keywords:
summary: "“Documentation is a love letter that you write to your future self.” Damian Conway (2005).
"

sidebar: mydoc_sidebar
permalink: data_documentation.html
---

## What is data documentation
It is good practise to write metadata and instructions about how to understand, interpret and reuse the data in a documentation, which will be provided with or linked to the data. Good documentation helps yourself and others in the future to understand how you collected and organised the data.

## Documentation methods
There are different ways of providing your data documentation, depending on the context in which your data and documentation are shared and/or stored.
* **Documentation in a published journal article or online platform.**\\
If the information needed to understand data is in a journal article or in an online platform, it is possible to refer to it from the data sharing system, but before doing so you should be sure that (a) it provides sufficient detail and (b) that it will be available as open access.\\
Note that usually ELNs and lab books are not open access, so they could be not suitable as data documentation.
* **Documentation in a web submission form of the deposition database or repository.**\\
In some cases, repositories and archives have specific [metadata fields](metadata) in their web submission form, which could require a specific [ontology](ontology) or controlled vocabulary. Find out the fields of the submission form of the repository to which you are planning to submit your data, copy these fields into your data documentation and fill these in as you go through your project.
* **Documentation in a separate structured metadata file.**\\
Some disciplines have developed structured [metadata schemas](metadata) for recording supporting information. Find out the fields of the metadata schema, download or copy these fields into your data documentation and fill these in as you go through your project. A structured metadata file can accompany files/data being deposited in a repository.
* **Documentation in a 'README' file.**\\
Any information that cannot be recorded in a structured way (i.e. as the values of fields in a data or metadata file) can be recorded as free text within a README file. A README file can accompany files/data being deposited in a repository.

## README file
**What is a README file**\\
A readme file is usually a text file titled README.txt, in .txt open format. Its title indicates that any potential user of your data should consult it before checking your data.\\
There are many types of README files, such as  README file to help you remember **how you organized your folders and files** on your computer or intranet, and  README file **describing the files** within each folder on your computer/intranet. Depending on how many files you have and for how many years you are going to maintain these files, you can create a README file for your directory or for each folder and subfolder created within your directory to document specific parts of your data.

**When to make a README file**\\
It is generally better to start writing up that information into a central document as soon as you start collecting your data, or even during the planning phase. Definitely before you show a project to other people or make it public. You might want to get into the habit of making it the first file you create in a new project.\\
The repository could also ask for a README file. That README file will include a listing of all the files to be submitted to the repository along with pertinent information. Creating a README file at the beginning of each project will save you time later.

**What to write in a README file**\\
You should only include elements that are useful and/or necessary to correctly interpret, evaluate and reuse your dataset, without the need to contact you directly about the dataset. The goal is not to make your readme file too lengthy.

[The Graduate Institute Geneva](https://libguides.graduateinstitute.ch/rdm/readme) compiled the following list of elements you could include in a README file located at the root of your dataset. You may of course place some of them in secondary documentation or in separate files, or even embed them in your data.

* General information
  * Dataset title
  * Investigators names, roles and contact info (include OrcID if available)
  * Grant information
  * DOI for the reference version of the dataset
* Your data and the world
  * Licences and restrictions placed on (parts of) the dataset
  * Links to publications based on the dataset
  * Relationship with other datasets
  * Other resources used as source for data collection (books, articles, etc.)
* Organisation
  * File naming system (with examples)
  * Folder structure
  * Relationships and dependencies between files
  * Other documentation files of interest within dataset (notes, companion files)
  * For each major file, short description of contents
  * Date of creation of each major file
* Data collection
  * Methods used for data collection (including references, documentation, links)
  * Collection date (or range)
  * Geographic location of collection (if appropriate)
  * Experimental & environmental conditions of collection (if appropriate)
  * Standards and calibration for data collection (if applicable)
  * Uncertainty, precision and accuracy of measurements (if appropriate)
  * Known problems & caveats (sampling, blanks, etc.)
* Codebook
  * Definition of codes, symbols and abbreviations used in files
  * List of variables with full name and definition
  * Definition of column headings and row labels for tabular data
  * Measurement units and data formats (e.g. YYYYYMMDD)
  * Treatment of missing data (code, etc.)
  * Example of records for each file type
* Processing, versioning & QA
  * Methods used for data processing
  * Software used in data collection and processing, including version numbers
  * File formats used in the dataset & recommended software
  * Quality control procedure applied
  * Description of file versioning system if appropriate
  * Dataset changelog

Excellent **readme file guides and templates** can be found here:
* [Guide to writing "readme" style metadata](https://data.research.cornell.edu/content/readme), Cornell University.
* [Best Practices](https://datamanagement.hms.harvard.edu/readme-files), Harvard Biomedical Data Management.
* [Guidelines for creating a README file](https://researchdata.4tu.nl/fileadmin/user_upload/Documenten/Guidelines_for_creating_a_README_file.pdf), 4TU.

## References
[Data Documentation and Metadata,](https://library.bath.ac.uk/research-data/working-with-data/data-documentation-metadata#s-lg-box-wrapper-17445057), University of Bath.\\
[Research Data Management](https://libguides.graduateinstitute.ch/rdm/readme), The Graduate Institute Geneva.\\
[ULibraries Research Guides](https://campusguides.lib.utah.edu/c.php?g=997634&p=7221520), University of Utah.\\
[Best Practices](https://datamanagement.hms.harvard.edu/readme-files), Harvard Biomedical Data Management.
