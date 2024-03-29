---
title: Documentation and metadata
---

Documentation and metadata: information about the data that is needed to enable finding, understanding and reuse of datasets by anyone.

## 1. Will a metadata scheme be used? Per dataset, list the standard metadata schemes that will be used and/or what type of metadata will be created and how.

### Asked by
[FWO, ERC, H2020, BELSPO, HorizonEurope]

### Meaning
A metadata scheme is a set of information (also called metadata fileds or attributes) that you need to give about your dataset. Metadata should provide the necessary information to enable finding, understanding and reuse of datasets by anyone.

Metadata gives information both at the overall study/project level (such as authors, aims, date etc) and at the individual data point or observation level (such as variables names and relation between files).

Check if/what metadata scheme is required by recommended repositories.

### Example answers
* Datasets [Name, Name] published in ENA will follow the ERC000033 Sample Checklist; Dataset [Name] published in ArrayExpress will follow MIAME and MINSEQE schemes.
* All datasets will be described according to the discipline-specific standard metadata [Name of the standard].
* Since standard metadata schemes are not suitable, we will use the following metadata scheme to describe all datasets: i)Title, ii)Description, iii)Date, iv)Creator, v)Rights/license, vi)Format, vii)Volume, viii)Experimental factors, ix) Species, x)Observational Unit, xi)Replicates, xii)Response variable, xiii) Technique, xiv)Experimental design [other].

### Mapping among funders' DMP templates

| Funder        | DMP section                                                                                                                              | DMP question                                                                                                                                                                                                                                                         |
|---------------|------------------------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| FWO           | Documentation and metadata                                                                                                               | Will a metadata standard be used? Describe in detail which standard will be used.  If not, state in detail which metadata will be created to make the data easy/easier to find and reuse.                                                                            |
| BELSPO        | Documentation and metadata                                                                                                               | Will a metadata standard be used? Describe in detail which standard will be used.  If not, state in detail which metadata will be created to make the data easy/easier to find and reuse.                                                                            |
| H2020         | Making data findable, including provisions for metadata                                                                                  | Outline the discoverability of data (metadata provision). Specify standards for metadata creation (if any). If there are no standards in your discipline describe what type of metadata will be created and how                                                      |
| ERC           | Making data findable                                                                                                                     | dataset description: metadata                                                                                                                                                                                                                                        |
| HorizonEurope | Making data findable, including provisions for metadata                                                                                  | Will rich metadata be provided to allow discovery? What metadata will be created? What disciplinary or general standards will be followed? In case metadata standards do not exist in your discipline, please outline what type of metadata will be created and how. |
| ScienceEurope | 2a. What metadata and documentation (for example the methodology of data collection and way of organising data) will accompany the data? | • Indicate which metadata will be provided to help others identify and discover the data. • Indicate which metadata standards (for example DDI, TEI, EML, MARC, CMDI) will be used. • Use community metadata standards where these are in place.                     |

## 2. Will dataset metadata be provided in a machine-actionable format (structured according to standards) to be found by search engines and metadata harvesting servers? Will you provide keywords?

### Asked by
[HorizonEurope]

### Meaning
Keywords and other metadata can be harvested and indexed by data crawlers and search engines if the repository in which they are stored has mechanisms for repository interoperability (e.g., exposing metadata according to standard protocols for data harvesting).

Usually, data repositories have mechanisms for repository interoperability in place. Make sure to fill in all metadata fields, including keywords, when describing your datasets in repositories.

### Example answers
* Keywords and other metadata fields required by the repositories will be filled in for each dataset.

### Mapping among funders' DMP templates

| Funder        | DMP section                                             | DMP question                                                                                                                                                                                       |
|---------------|---------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| FWO           | na                                                      | na                                                                                                                                                                                                 |
| BELSPO        | na                                                      | na                                                                                                                                                                                                 |
| H2020         | na                                                      | na                                                                                                                                                                                                 |
| ERC           | na                                                      | na                                                                                                                                                                                                 |
| HorizonEurope | Making data findable, including provisions for metadata | Will search keywords be provided in the metadata to optimize the possibility for discovery and then potential re-use? Will metadata be offered in such a way that it can be harvested and indexed? |
| ScienceEurope | na                                                      | na                                                                                                                                                                                                 |

## 3. How will you document data provenance? Specify if appropriate standards (such as W3C Prov Model Primer) will be used.

### Asked by
[HorizonEurope]

### Meaning
Data provenance is the documentation or metadata that describes why and how the data was produced, where, when and by whom.

Data provenance can be captured and represented in a number of ways:
* in human readable format in a README file
* In a structured way according to metadata standards (Dublin Core) and metadata model (W3C Provenance Data Model) 
* captured internally by software tools (ELN, LIMS, workflow systems)
* in a way that supports machine-to-machine interactions

### Example answers
* Data provenance will be documented in README files.
* The used workflow system (Galaxy) will record provevance during data analysis.

### Mapping among funders' DMP templates

| Funder        | DMP section         | DMP question                                                                              |
|---------------|---------------------|-------------------------------------------------------------------------------------------|
| FWO           | na                  | na                                                                                        |
| BELSPO        | na                  | na                                                                                        |
| H2020         | na                  | na                                                                                        |
| ERC           | na                  | na                                                                                        |
| HorizonEurope | Increase data reuse | Will the provenance of the data be thoroughly documented using the appropriate standards? |
| ScienceEurope | na                  | na                                                                                        |

## 4. If your datasets are somehow related to other existing datasets, specify if the scientific meaning of the cross-references will be documented (qualified references).

### Asked by
[HorizonEurope]

### Meaning
A qualified reference is a cross-reference that explains its intent. For example, X is regulator of Y is a much more qualified reference than X
is associated with Y, or X see also Y. The goal therefore is to create as many meaningful links as possible between (meta)data resources to
enrich the contextual knowledge about the data. (Source: https://www.go-fair.org/fair-principles/i3-metadata-include-qualified-referencesmetadata/).

### Example answers
* The scientific links between referenced datasets will be described.

### Mapping among funders' DMP templates

| Funder        | DMP section               | DMP question                                               |
|---------------|---------------------------|------------------------------------------------------------|
| FWO           | na                        | na                                                         |
| BELSPO        | na                        | na                                                         |
| H2020         | na                        | na                                                         |
| ERC           | na                        | na                                                         |
| HorizonEurope | Making data interoperable | will your data include qualified references to other data? |
| ScienceEurope | na                        | na                                                         |

## 5. Do you make use of persistent identifiers or unique identifiers such as Digital Object Identifiers (DOI)?

### Asked by
[ERC, H2020, HorizonEurope]

<!---### Meaning--->

<!---### Example answers--->

### Mapping among funders' DMP templates

| Funder        | DMP section                                             | DMP question                                                                                                                                                                 |
|---------------|---------------------------------------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| FWO           | na                                                      | na                                                                                                                                                                           |
| BELSPO        | na                                                      | na                                                                                                                                                                           |
| ERC           | Making data findable                                    | dataset description: persistent and unique identifiers, DOI                                                                                                                  |
| H2020         | Making data findable, including provisions for metadata | Outline the identifiability of data and refer to standard identification mechanism. Do you make use of persistent and unique identifiers such as Digital Object Identifiers? |
| HorizonEurope | Making data findable, including provisions for metadata | Will data be identified by a persistent identifier?                                                                                                                          |
| ScienceEurope | na                                                      | na                                                                                                                                                                           |

## 6. Will you use standard vocabularies/ontologies to describe your data (at the level of each recorded value)? Per dataset, list the standard vocabularies/ontologies you will use or if/how you will map your customised terms to standard ontologies. Specify if you will publish your customised terms in appropriate platforms and where/how.

### Asked by
[ERC, H2020, HorizonEurope]

<!---### Meaning--->

### Example answers
* Ontologies required by the chosen data repositories will be used: EFO for ArrayExpress.
* All datasets will be described by using the following ontologies: Experimental Factor Ontology (EFO), Statistics Ontology (STATO) and Plant Ontology (PO).
* For datasets [Name], standard ontologies are not suitable, but we will create a controlled vocabulary and map it to the standard ontologies [Names].

### Mapping among funders' DMP templates

| Funder        | DMP section               | DMP question                                                                                                                                                                                                                                                                        |
|---------------|---------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| FWO           | na                        | na                                                                                                                                                                                                                                                                                  |
| BELSPO        | na                        | na                                                                                                                                                                                                                                                                                  |
| ERC           | Making data interoperable | Which standard or field-specific data and metadata vocabularies and methods will be used                                                                                                                                                                                            |
| H2020         | Making data interoperable | Specify whether you will be using standard vocabulary for all data types present in your data set, to allow inter-disciplinary interoperability? If not, will you provide mapping to more commonly used ontologies?                                                                 |
| HorizonEurope | Making data interoperable | In case it is unavoidable that you use uncommon or generate project specific ontologies or vocabularies, will you provide mappings to more commonly used ontologies? Will you openly publish the generated ontologies or vocabularies to allow reusing, refining or extending them? |
| ScienceEurope | na                        | na                                                                                                                                                                                                                                                                                  |

## 7. Per dataset, specify how the description of the list of terms or the URI/URL of the used vocabularies/ontologies will be provided (in machine-actionable formats, in human-readable formats, both, etc).

### Asked by
[HorizonEurope]

<!---### Meaning--->

<!---### Example answers--->

### Mapping among funders' DMP templates

| Funder        | DMP section               | DMP question                                                                                                                                                                                                                                                                                                                                                                                                  |
|---------------|---------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| FWO           | na                        | na                                                                                                                                                                                                                                                                                                                                                                                                            |
| BELSPO        | na                        | na                                                                                                                                                                                                                                                                                                                                                                                                            |
| ERC           | na                        | na                                                                                                                                                                                                                                                                                                                                                                                                            |
| H2020         | na                        | na                                                                                                                                                                                                                                                                                                                                                                                                            |
| HorizonEurope | Making data interoperable | What data and metadata vocabularies, standards, formats or methodologies will you follow to make your data interoperable to allow data exchange and re-use within and across disciplines? Will you follow community-endorsed interoperability best practices? Which ones? Will your data include qualified references  to other data (e.g. other data from your project, or datasets from previous research)? |
| ScienceEurope | na                        | na                                                                                                                                                                                                                                                                                                                                                                                                            |

## 8. What documentation will be provided to enable understanding and reuse of data collected/generated in this project?

### Asked by
[FWO, H2020, BELSPO, HorizonEurope]

### Meaning
Describe what documentation will be provided for the public when sharing your datasets. Documentation, containing metadata and additional information, should allow anyone to fully understand the content of the datasets. As metadata, documentation can contain general information about the overall study/project level (such as authors, aims, date etc) and/or structured description at the individual data point or observation level (such as variables names and relation between files).

Check if the repositories of your choice allow upload of documents or README file as an attachment to datasets, or if you have to use pre-defined fields.

### Example answers
* In ArrayExpress "Protocols" section, we will explain the file naming convention, column names for tabular data, performed calculations, materials and methods. Identifier of the associated open access article describing materials and methods will be provided.
* In Github, each well-annotated script will have a README.txt file containing all metadata and the following additional information: version, how to use the script, [etc...].
* In Zenodo, metadata and additional information will be provided in the "Description" section. Metadata about each data entry will be provided as structured machine readable .csv file in attachment.

### Mapping among funders' DMP templates

| Funder        | DMP section                                                                                                                              | DMP question                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
|---------------|------------------------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| FWO           | Documentation and metadata                                                                                                               | What documentation will be provided to enable understanding and reuse of data collected/generated in this project?                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| BELSPO        | Documentation and metadata                                                                                                               | What documentation will be provided to enable understanding and reuse of data collected/generated in this project?                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| ERC           | na                                                                                                                                       | na                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| H2020         | Making data findable, including provisions for metadata                                                                                  | Outline naming conventions used. Outline the approach towards search keyword. Outline the approach for clear versioning.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| HorizonEurope | Increase data reuse                                                                                                                      | How will you provide documentation needed to validate data analysis and facilitate data re-use (e.g. readme files with information on methodology, codebooks, data cleaning, analyses, variable definitions, units of measurement, etc.)?                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| ScienceEurope | 2a. What metadata and documentation (for example the methodology of data collection and way of organising data) will accompany the data? | • Indicate how the data will be organised during the project, mentioning for example conventions, version control, and folder structures. Consistent, well-ordered research data will be easier to find, understand, and re-use. • Consider what other documentation is needed to enable re-use. This may include information on the methodology used to collect the data, analytical and procedural information, definitions of variables, units of measurement, and so on. • Consider how this information will be captured and where it will be recorded (for example in a database with links to each item, a ‘readme’ text file, file headers, code books, or lab notebooks). |
