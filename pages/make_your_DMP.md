---
title: Make your Data Management Plan
tags: [getting_started, troubleshooting]
keywords:
sidebar: mydoc_sidebar
permalink: make_your_DMP.html
---


## Online tools for DMP
DMPonline.be/DSW

## Existing data
Before investing time, effort and resources into generating new data, look into what has already been done in the past in the field. By reusing data you increase its value and minimize redundancy. 
### Sources of data
Bibliographic research.
Start with a bibliographic research. If you find an interesting publication without any available data, you can contact the authors and request access to their data. If their data are not available or you didn’t find any interesting publication, you can look for existing data in many repositories. 

Data repositories
Repositories can also contain data that are not linked to any manuscript or “results paper”.
Data repositories can be general, data type specific or discipline specific. To find the repositories that could have data of your interest, you can use the links below:

Recommended repositories by European Life sciences Infrastructure for Biological Information: ELIXIR Deposition Databases for Biomolecular Data.
List of Recommended Data Repositories by Scientific Data (Nature).
List of Recommended Repositories by Springer Nature
List of repositories used by Flemish research infrastructures: https://mronocoroni.shinyapps.io/20200325/.
Catalogue of databases by FAIRsharing: https://fairsharing.org/databases/.
International search engines for academic and scientific research: https://explore.openaire.eu.
Registry of Research Data Repositories by Data Cite: https://www.re3data.org.
Elsevier offers DataSearch (Beta) to search in a collection of data repositories.
Google offers Google Dataset Search or Google Advanced Search.
Large institutes such as WHO also collect and provide useful data.

If you want to know how to publish your dataset and get cited for it (not only for your results based on that dataset), see “Data journals (external link)” and “Data submission into repositories(internal link)” paragraphs.
### How to cite an existing dataset

Complete citation
Author(s), Year, Dataset Title, Identifier, Repository, Version.

Short citation for DMP
Identifier, Version (if applicable).

Identifiers are machine readable alphanumeric strings provided by repositories. Identifiers can be:
Accession number – example: E-MTAB-NNNN
DOIs – example: doi: 10.1038/d41586-018-03071-1

If you want to know how to make your own identifier for your dataset read here.


## File formats
Data is only as good as the format it is saved in. The format of a file determines which programs can be used to access it.
### Open vs Proprietary

Files in Open format (our favorite)
Can be opened by everybody for free
Are less prone to become obsolete, because a variety of software should be able to open them
Examples: file.csv and file.pdf can be opened by any text editor or spreadsheet program and any pdf readers (?), respectively
General list: https://en.wikipedia.org/wiki/List_of_open_formats

Files in Proprietary format
Can be open only by people holding the license for the needed software
Tend to be replaced by new versions or new formats, limiting their future reuse
Examples: file.xls and file.ppt can be opened only by people that own a license for Microsoft Office Software
General list: https://en.wikipedia.org/wiki/Proprietary_format

### File formats per discipline
https://en.wikipedia.org/wiki/List_of_file_formats#Scientific_data_(data_exchange)
Recommended file format:
https://www.ugent.be/en/research/datamanagement/during-research/collection.htm 

### Is my file format open or close?





Technology
Format
Format type
Software?
Illumina sequencing
.fastq
open
Galaxy
Proteomics
mzXML or mzML
open





or search box

## Data volume
The amount of data generated will affect the choice (link to repos section) and cost of storage (link to cost section). It is impossible to predict how much data will be produced, but an estimation can help 
### How to estimate the volume of a dataset.
Consider at least all raw data files. Check if also processed data are required by the repository that you want to use to share/store your data.
Estimate file size per sample based on similar files previously generated using similar setting.
Multiply the estimated file size by the number of samples you are going to generate during the project.

### Sequencing files (Illumina) 
Formula:
One .fastq file for Single-End sequencing
Fastq MB = Number of million reads  x (60 +  2 x read length in bp)

Paired-End sequencing data produces 2 fastq files
Fastq MB = Number of million reads  x (60 +  2 x read length in bp) x 2

It is recommended to store .fastq files in a compressed format (ex: .gz), which makes the file approximately 4 times smaller.

Formula to convert Coverage to Number of reads:
Number of reads needed (Million) = (Coverage x Genome length (bp) / read length) /1000000

If you want to know more about number of reads needed per experiment, coverage and reads length, see RNA-Seq read length and coverage and Coverage and Read Depth for NGS.


## Datasets Sharing
Sharing datasets:
Means making datasets available to all world and society outside your institute.
Does NOT necessarily mean Open Access nor Public. Datasets can be shared with Closed or Restricted Access.
Does NOT have to happen immediately, while you are still working on the project. Data can be shared after your scientific paper is published.
Is NOT as sharing your “result paper”. Datasets are the collection of values used in your manuscript to generate the results.
### Good reasons to make your datasets open access
European Code of Conduct for Research Integrity (2017) states that “Researchers, research institutions and organisations ensure access to data is as open as possible, as closed as necessary”.
Research funders, institutions and reputable journals/publishers with data sharing mandates will normally allow you to opt out of their open data requirements only for legitimate reasons (see below). 
Ten reasons to share your data
Ask not what you can do for open data; ask what open data can do for you
List of repositories with open access

### Good reasons to close or restrict access to your datasets
Ethical issues
Personal data
Sensitive data that could potentially cause harm (e.g. to endangered species, vulnerable sites or groups, public health, national security...) if made public. Some personal data are considered sensitive personal data.
Legal or contractual issues
Confidential data (you have a duty or agreed to keep the data confidential)
Third-party data (data are not generated in the course of your own research project, but are supplied to you by another party)
Copy right and/or database right data
Data with potential economic/commercial value

If you want to close or restrict access to your datasets, you must explain your ethical and/or legal issues in the Data Management Plan. 
You can ask help to the Legal Team, Tech Transfer Office or Data Protection Officer of your institute.

### Types of restricted access to datasets
Registered access or authentication procedure
Registered access is provided by some data archives, which require potential users to register before they are able to access data files. Registered access allows the data archive to monitor who access data, enabling reminders about conditions of use to be issued.
Registered access must be provided by a data repository
List of repositories with registered or authentication access

Data Access Committees (DACs)
A Data Access Committee (DAC) is a organization of one or more named individuals whom are responsible for data release to external requestors based on specific criteria.
A DAC can be part of the data repository
University and/or University Hospital can have a DAC to assist data submission to repositories and assess data access requests
Criteria established by DAC for data access are usually described on the website of the organization
List of repositories with DAC

Non-disclosure agreements
Non-disclosure agreements can be used to share confidential or sensitive data with specific individuals for specific purposes and under specific terms. Contact the Legal Team of your institute if you require a non-disclosure agreement for your data.
The terms of the agreement must be described in the documentation associated with the datasets (metadata)
List of repositories that give access upon contractual agreement

Access upon request (not recommended)
In order to manage this type of access a named contact is required for the dataset who would be responsible for making decisions about whether access is granted.
The owner of the data must provide his/her contact in the documentation associated with the datasets (metadata)
List of repositories that give access upon request

Embargo
It is a defined period of time, imposed by the author, which prohibits access to data. After the embargo period, data becomes Open, Closed or Restricted access.
Reasons for embargo:
Time needed to secure Intellectual Property (IP)
Time needed to publish the results of the research (manuscript) in a journal.

List of repositories that give access upon contractual agreement


## Data Licenses
Usually, a license is needed to use someone else’s data.

### Why I need a license
When you create an original scientific work, such as articles, you are protected by copyright. Nobody apart from you has the right to make the work public or reproduce it.

Copyright protection applies to databases that are creative/original in the selection and/or arrangement of the contents and constitute their authors’ own intellectual creation. The modalities of such protection may however vary from jurisdiction to jurisdiction.

If a dataset is protected by copyright or related rights and doesn’t have a license, you can’t use that dataset. You have to contact the owner(s) of rights directly for permission. There are a limited number of exceptions that permit use without a licence or specific permission. 

References:
https://europa.eu/youreurope/business/running-business/intellectual-property/copyright/index_en.htm#shortcut-1
https://www.iprhelpdesk.eu/node/2014


### Licenses and data repositories

Usually, a recommended data repository will apply a license to any dataset it holds. 
Some repositories apply their license or sharing policy to all datasets by default: LIST
Some repositories let the owner select a license (from a list of options) when depositing data: LIST
Some repositories let the owner attach the license to the metadata of the research data or set a Read Me file for the data.

Or check in re3data

### Find a license for your datasets
Good practice is to apply a standard and open license for open research data, as it ensures legal interoperability and the widest possible reuse. Among the standard licenses commonly used for research data is the suite of Creative Commons (CC) licenses, which offer different levels of permission. CC licenses conformant with the “Open Definition” are:
Public Domain Dedication (CC0 1.0): waives copyright and related rights (e.g. databases).  
Attribution (CC-BY-4.0): gives others maximum freedom to reuse (i.e. copy, redistribute, adapt) your work, provided they give appropriate credit.
Attribution Share-Alike (CC-BY-SA-4.0): same as CC-BY-4.0, but requires redistribution of derivative works under this same license. 

Need help selecting an appropriate standard license? 
license selector tool
License Chooser

Reference: https://www.ugent.be/en/research/datamanagement/after-research/sharing.htm#Restrictionsondatasharing


Read more about How to apply licenses for Research Data.

## Metadata 
Metadata is information that describes a dataset. Expand.
### Metadata Schema
A metadata schema is a defined set of structured information that you need to give about your dataset. Metadata should provide all the necessary information to enable finding, understanding and reuse of data datasets by anyone. 
### Type of Metadata

### Metadata schema and data repositories
Data repositories can use:
Repository-Developed Metadata Schemas
Current standard metadata schema
Find out in re3data
### Metadata schema in practise
Researchers should start using the same metadata schema used by the data repositories of their choice already at the beginning of their project.
In your spreadsheet, use repository-specific metadata as columns headers (ex: Organism, Sex, Age, Unit etc…)
…
### Customized metadata standards: TBD

## Identifiers: TBD
Given by repositories
How to make your own
What's a DOI and where to find it.
Do chosen repositories provide identifiers?
How to create a persistent identifier. 
How to add identifier to datasets


## Ontology: TBD
Definition
Which ontology is used by my chosen repository
Find your ontology here: bioportal link. 
How to use ontology in Excel: RightField LINK.
How to create control vocabulary in Excel: LINK


## Documentation for metadata
Metadata: all the information to enable understanding and re-use of datasets.
Folder structure
File naming convention
Versioning control
Protocols 
Column names for tabular data
Performed calculations
Materials and methods
Instruction on how to use scripts, software and open file format

In what kind of documents I can provide the metadata of my dataset:
Repositories have dedicated tab for administrative and experimental/scientific metadata.
Repositories allow upload of a Read Me file per dataset
Metadata will be described in details at the beginning of the text file or in the first tab of the spreadsheet containing the dataset
…
TBD:
How to write a README.txt file.
What to use for versioning control.
Good practise for file naming convention and folder structure.


## Costs for sharing and storing data
Possible costs for data sharing: TBD
- fee to publish data in repositories
- fee to publish manuscript in Open Access Journal

Funding: TBD
What costs are eligible as part of the grant? Read more
Possible funding for covering data storage costs. Read more

## Data quality: TBD
Explain how the consistency and quality
of data collection will be controlled and documented. This may include processes such as calibration, repeated samples or measurements, standardised data capture, data entry validation, peer review of data, or representation with controlled vocabularies (Science Europe).

## Personal data?
GDPR information
https://gdpr-info.eu/
https://eur-lex.europa.eu/legal-content/EN/TXT/?qid=1532348683434&uri=CELEX:02016R0679-20160504



