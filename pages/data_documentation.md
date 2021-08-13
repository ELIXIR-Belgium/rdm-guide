---
title: Data documentation
summary: "“Documentation is a love letter that you write to your future self.” Damian Conway (2005).
"

---

## What is data documentation?

Data documentation is information about the data. Data documentation could be defined as the clear description of everything that a new “data user” or “your future-self” would need to know in order to find, understand, reproduce and reuse your data, independently and without any chance of misinterpretation.  Data documentation should clearly describe how you generated or used the data, why, and where to find the related files. It could be used also as onboarding documentation for new colleagues, even if the responsible researcher leaves the project.
Data documentation is needed at two levels: documentation about the entire study or project and documentation about individual records, observations or data points. 

### Project or Study-level documentation

Study-level documentation describes the project title and summary, study aims, authors, institutions involved, funds, methods, licence and identifier for each dataset, folders structure, file naming conventions, versioning system, relation between files or tables and other general information.

### Data-level documentation

Data-level documentation provides information about individual records or data point, such as the meaning of each variable name, label, ID or type (numeric, string, regular expression, date, etc), units (i.e., cm, kg…), experimental factors, categories, controlled vocabulary or ontology terms accepted as values for each variable, missing values code and so on. Data-level documentation should be impossible to misinterpret or misunderstand by other researchers and by your future-self.


## Documentation during the project

It is recommended to establish a shared data organisation system for files (or tables in a database) and documents in your team. The established data organization system has to be described in detail in the documentation, preferably in open and machine-readable formats (i.e., XML, JSON, CSV, TSV, RDF, HTML). The description of the data organization system has to be placed in the folder at the highest level (e.g. “Project” folder).

Both study- and data-level documentation must be generated as early as possible in the research process and also maintained, in order to be accurate and complete. Study-level and data-level documentation can be provided as
* README file.
* [Codebook](https://ddialliance.org/training/getting-started-new-content/create-a-codebook).

You can generate a README file and a Codebook per each folder and/or each file or table, depending on the needs of your research project. Each of these files can be made in several formats depending on the features available in your data documentation tool, your needs or skills. Machine-readable formats are preferred to non-machine-readable ones. Also non-proprietary formats are preferred over proprietary ones.


## Documentation when publishing data

There are different ways of providing data documentation when publishing data, depending on the context in which both your data and documentation are published and/or stored.

### Documentation in a published journal article or online platform

If the information needed to understand the data is in a journal article or in an online platform, it is possible to refer to it from the data sharing/publishing system, but before doing so you should be sure that (a) it provides sufficient detail and (b) that it will be available as open access.

### Documentation in a web submission form of the deposition database or repository

In some cases, repositories and archives have specific [metadata fields](metadata) in their web submission form, which could require a specific [ontology](ontology) or controlled vocabulary. Find out the fields of the submission form of the repository to which you are planning to submit your data, copy these fields into your data documentation and fill these in as you go through your project. You can copy the collected information into the online form when publishing your data.

### Documentation in a separate structured metadata file

Some disciplines have developed structured [metadata schemes](metadata) for recording supporting information. Find out the fields of the metadata scheme, download or copy these fields into your data documentation and fill these in as you go through your project. Some repositories could allow a structured metadata file to accompany files/data being deposited in the repository.

### Documentation in a 'README' file

Any information that cannot be recorded in a highly structured way could be recorded as free text within a README file. Some repositories could allow a README file to accompany files/data being deposited in a repository.


## README file

### What is a README file

A readme file is usually a text file titled README.txt, in .txt open format. Its title indicates that any potential user of your data should consult it before checking your data.

### When to make a README file

It is generally better to start writing up information into a central document as soon as you start collecting your data, or even during the planning phase. Definitely before you show a project to other people or make it public. You might want to get into the habit of making it the first file you create in a new project.

The repository could also ask for a README file. That README file will include a listing of all the files to be submitted to the repository along with pertinent information. Creating a README file at the beginning of each project will save you time later.

### What to write in a README file
The content of a README file depends on what it refers to. For instance:
* If a README file is placed within the higher project folder, it should contain general information about the project and the used data organisation system.
* If a README file is placed within a subfolder containing raw or processed data, it should contain data-level information.

Depending on how many folders/files you have and for how many years you are going to maintain them, you can create a README file for your directory or for each folder and subfolder created within your directory, to document specific parts of your data. Make sure that your README files are not too lengthy.


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

### README file guidelines and templates
Excellent readme file guides and templates can be found here:
* [Guide to writing "readme" style metadata](https://data.research.cornell.edu/content/readme). *Cornell University*.
* [README Files](https://datamanagement.hms.harvard.edu/readme-files). *Harvard University*.
* [Guidelines for creating a README file](https://researchdata.4tu.nl/fileadmin/user_upload/Documenten/Guidelines_for_creating_a_README_file.pdf). *4TU*.

## Sources and further reading
### Sources
* Data Documentation and Metadata. *University of Bath* <https://library.bath.ac.uk/research-data/working-with-data/data-documentation-metadata#s-lg-box-wrapper-17445057>.
* Files and Folders: README files. *Libraries Research Guides University of Utah* <https://campusguides.lib.utah.edu/c.php?g=997634&p=7221520>.