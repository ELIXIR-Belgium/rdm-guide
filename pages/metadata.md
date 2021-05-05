---
title: Metadata
summary: "“Metadata liberates us, liberates knowledge.” David Weinberger (2008).
"
---

## Definition of metadata
Metadata means information about the data. In other words, metadata summarizes basic description and information about the data, which makes finding and understanding the data itself easier, for humans and machines.

Many distinct [types](https://en.wikipedia.org/wiki/Metadata#Types) and categories of metadata have been defined (see also [NISO 2004](https://marciazeng.slis.kent.edu/metadatabasics/types.htm), [How to FAIR](https://howtofair.dk/how-to-fair/metadata/#what-are-metadata)). However, one important distinction is between [metadata](metadata_in_practice) that gives information about the overall study/project (such as authors, aims, date etc) and metadata that applies at the individual data point or observation level (such as variables names and relation between files). Usually, these two metadata types need to be provided in different type of [documentation](data_documentation).

Few simple and intuitive **examples** of "metadata vs data" can be found [here](https://dataedo.com/kb/data-glossary/what-is-metadata).

## What metadata are for
Metadata is as important as data, since it provides all the necessary information to enable finding, understanding and reuse of data by anyone. For example, if you want to find a book in a library, you can usually search for the book by using the following metadata in the library catalogue:
* Author
* Publication year
* Title
* Publisher
* Location

Without these metadata it would be impossible to find the book you are looking for.

## Metadata schemas and where to find them
A metadata schema is a fixed set of attributes (or metadata fields) about the data that needs to be provided. Some attributes are mandatory, some are only recommended or optional. When creating metadata, it is good practice to not invent your own schema, but to make use of existing metadata schemas accepted as **standards** by several communities. There are many standard metadata schemas, some generic, while others discipline-specific.
* **Generic** metadata schemas, such as [Dublin Core](https://guides.library.ucsc.edu/c.php?g=618773&p=4306386), tend to be easy to use and widely adopted, but often need to be expanded in order to cover more specific information.
* **Discipline-specific** schemas, such as [MIAPPE](https://github.com/MIAPPE/MIAPPE/blob/master/MIAPPE_Checklist-Data-Model-v1.1/MIAPPE_templates/MIAPPEv1.1_training_spreadsheet.xlsx), have a much richer vocabulary and structure, but tend to be highly specialized and only understandable by researchers in that area. The [European Nucleotide Archive (ENA)](https://www.ebi.ac.uk/ena/submit/checklists) developed [sample checklists](https://www.ebi.ac.uk/ena/browser/checklists) to meet the needs of different research communities to describe biological samples.

Generic and discipline-specific standard metadata schemas can be found on [Research Data Alliance (RDA)](https://rd-alliance.github.io/metadata-directory/standards/) and [Digital Curation Center (DCC)](https://www.dcc.ac.uk/guidance/standards/metadata/list) websites.

## Metadata schema and data repositories
Data repositories can use:
* **Standard metadata schemas**\\
The RDA keeps an open knowledge base on research metadata standards along with the [repositories that use them](https://rd-alliance.github.io/metadata-directory/use_cases/). Repositories can be selected based on metadata standard by using [re3data.org](https://www.re3data.org/search?query=).
* **Repository-Developed metadata schemas**\\
Some repositories have decided that current standards do not fit their metadata needs, and so they have created their own requirements. Information about a specific metadata schema required by a data repository should be found on the repository’s website, usually under the “Help” or “Submit” section. Moreover, lists of Repository-Developed metadata schemas can be found on [DCC](https://www.dcc.ac.uk/resources/metadata-standards/repository-developed-metadata-schemas) and [RDA](https://rd-alliance.github.io/metadata-directory/standards/repository-developed-metadata-schemas) websites.

Since data repositories can require that submitted datasets must be described according to a specific metadata schema, it is recommended to consider in [what repository](data_management_steps) your data could be published already at the beginning of your project. Knowing what metadata will be required allows you to easily keep track of all that information, while collecting the data or performing the experiments.

## How to use metadata schema in practice
[Metadata schema in practice](metadata_in_practice)

## References
* [Data description in practice](https://www.uu.nl/en/research/research-data-management/guides/storing-and-preserving-data/data-description-in-practice#building), Utrecht University.
* [Metadata](https://www.ugent.be/en/research/datamanagement/during-research/documentation.htm#Metadata), UGent.
* [UNC Library guide on metadata](https://guides.lib.unc.edu/metadata).
* [Research Data Alliance (RDA)](https://www.rd-alliance.org/) - Metadata Standards Directory [Working Group](https://rd-alliance.github.io/metadata-directory/).
* The [Research Data Management Group](https://data.research.cornell.edu/) at Cornell.
* [GO FAIR Principles](https://www.go-fair.org/fair-principles/).
