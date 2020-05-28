---
title: Metadata
keywords:
summary: Empty summary
sidebar: mydoc_sidebar
permalink: metadata.html
---

## What is metadata?
Metadata is information that describes the content, quality, condition, and other characteristics of a dataset. Metadata allows data to be discovered, accessed, and reused. <!---Expand.--->

### Metadata Schema
Metadata should provide all the necessary information to enable finding, understanding and reuse of data datasets by anyone. The various elements of the metadata should be standardized, to be useful across datasets. This includes standardized language, spelling, date format, etc.


A metadata schema is a defined set of structured information about a dataset. It describes how the metadata is set up, and usually addresses standards for common components of metadata like dates, names, and places. There are many metadata schemas, some generic, while others discipline-specific. Generic ones such as Dublin Core tend to be easy to use and widely adopted, but often need to be expanded in order to cover more specific information. Domain-specific schemas have a much richer vocabulary and structure, but tend to be highly specialized and only understandable by researchers in that area.



### Metadata schema and data repositories
Data repositories can use:
-	Repository-Developed Metadata Schemas: some repositories have decided that current standards do not fit their metadata needs, and so have created their own requirements.
-	Sandard metadata schema. The Research Data Alliance keeps an open knowledge base on [research metadata standards](https://rd-alliance.github.io/metadata-directory/standards/) along with [the repositories that use them](https://rd-alliance.github.io/metadata-directory/use_cases/).
<!---Find out in re3data--->


### Example metadata schemas
* **Dublin Core**: Dublin Core is a general standard for digital and physicl objects first used by libraries, and can be adapted for specific disciplines. [Dryad](https://datadryad.org/stash), a digital data repository, uses Dublin Core.
* **Darwin Core**: This metadata schema is for describing biological specimens, including their occurrence in nature as documented by observations, samples, and related information. Based on the Dublin Core, this schema is used in natural history specimen collections and species observation databases. [The Global Biodiversity Information Facility (GBIF)](https://www.gbif.org/) uses Darwin Core.

### Templates and customized metadata standards <!---TBD--->
Several basic metadata templates exist (e.g. [Dublin Core standard template](http://nsteffel.github.io/dublin_core_generator/), [ISO 19115-2 standard template](https://data.gulfresearchinitiative.org/metadata-editor-start)) that will capture the information needed for a specific metadata standard.


If no adequate metadata schema exists for a research dataset, a 'Readme' file can be created. The Research Data Management Service Group at Cornell have [guidelines](https://data.research.cornell.edu/content/readme) and a [template](https://cornell.app.box.com/v/ReadmeTemplate) for making a 'Readme' metadata file.

### How/when/where to use metadata schema in practice
Researchers should start using the same metadata schema used by the data repositories of their choice already at the beginning of their project.
-	In your spreadsheet, use repository-specific metadata as columns headers (ex: Organism, Sex, Age, Unit etc…)
-	…

In addition to the schema requirements, the context of the data generation should be richly annotated to maximize its reusability:
* Describe the scope of your data: for what purpose was it generated/collected?
* Mention any particularities or limitations about the data that other users should be aware of.
* Specify the date of generation/collection of the data, the lab conditions, who prepared the data, the parameter settings, the name and version of the software used.
* Is it raw or processed data?
* Ensure that all variable names are explained or self-explanatory (i.e., defined in the research field’s controlled vocabulary).
* Clearly specify and document the version of the archived and/or reused data.



## References
[UNC Library guide on metadata](https://guides.lib.unc.edu/metadata)

[Research Data Alliance (RDA)](https://www.rd-alliance.org/) Metadata Standards Directory [Working Group](https://rd-alliance.github.io/metadata-directory/)

The [Research Data Management Group](https://data.research.cornell.edu/) at Cornell.

[GO FAIR Principles](https://www.go-fair.org/fair-principles/)
