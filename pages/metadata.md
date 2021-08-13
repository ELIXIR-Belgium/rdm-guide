---
title: Metadata
summary: "“Metadata liberates us, liberates knowledge.” David Weinberger (2008).
"
---

## What is metadata?

Metadata is highly structured data documentation. Highly structured means that information about the data is provided through specific attributes, also called metadata elements or fields. For instance, typical metadata elements of a book in a library are: Title, Author, Publication year, Publisher, Bookcase, Shelf. Thanks to these metadata fields, a specific book can be easily found among many other. Few simple and intuitive examples of “metadata vs data” can be found [here](https://dataedo.com/kb/data-glossary/what-is-metadata).

In our digital era, it's important that metadata (as well as the data) is machine-readable. However, machine-readable is different from digital. A digital object is machine-readable only if its content can be processed by computer programs. Some machine-readable formats are XML, JSON, CSV, TSV, RDF and HTML.


## What is a metadata scheme?

A metadata scheme is a fixed set of metadata elements (fields or attributes). Although everyone could define a personalised metadata scheme to describe data, it is good practice to use metadata schemes developed by and accepted as standards by research communities and/or data repositories. In a metadata scheme, some attributes could be mandatory, some other only recommended or optional. Often, standard metadata schemes make use of ontologies.


## Metadata schemes and where to find them

There are many standard metadata schemes, some generic and some discipline-specific.
* **Generic** metadata schemes, such as [Dublin Core](https://guides.library.ucsc.edu/c.php?g=618773&p=4306386), tend to be easy to use and widely adopted, but often need to be expanded in order to cover more specific information.
* **Discipline-specific** schemes, such as [MIAPPE](https://github.com/MIAPPE/MIAPPE/blob/master/MIAPPE_Checklist-Data-Model-v1.1/MIAPPE_templates/MIAPPEv1.1_training_spreadsheet.xlsx), have a much richer vocabulary and structure, but tend to be highly specialized and only understandable by researchers in that discipline. The [European Nucleotide Archive (ENA)](https://www.ebi.ac.uk/ena/submit/checklists) developed [sample checklists](https://www.ebi.ac.uk/ena/browser/checklists) to meet the needs of different research communities to describe biological samples.

Generic and discipline-specific standard metadata schemes can be found at:
* [Research Data Alliance (RDA)](https://rd-alliance.github.io/metadata-directory/standards/).
* [Digital Curation Center (DCC)](https://www.dcc.ac.uk/guidance/standards/metadata/list).
* [FAIRsharing.org](https://fairsharing.org/standards/).


## Metadata schemes and data repositories

Data repositories can use:

* **Standard metadata schemes**\\
The RDA keeps an open knowledge base on research standard metadata along with the [repositories that use them](https://rd-alliance.github.io/metadata-directory/use_cases/). Repositories can be selected based on standard metadata by using [re3data.org](https://www.re3data.org/search?query=).

* **Repository-developed metadata schemes**\\
Some repositories have decided that current standards do not fit their metadata needs, and so they have created their own requirements. Information about a specific metadata scheme required by a data repository should be found on the repository’s website, usually under the “Help” or “Submit” section. Moreover, lists of repository-developed metadata schemes can be found on [DCC](https://www.dcc.ac.uk/resources/metadata-standards/repository-developed-metadata-schemas) and [RDA](https://rd-alliance.github.io/metadata-directory/standards/repository-developed-metadata-schemas) websites.

Since data repositories can require that submitted datasets must be described according to a specific metadata scheme, it is recommended to consider in [what repository](data_management_steps) your data could be published already at the beginning of your project. Knowing what metadata will be required allows you to easily keep track of all that information, while collecting the data or performing the experiments.


## How to use metadata schemes in practice

[Metadata schemes in practice](metadata_in_practice)


## Sources and further reading
### Sources
* Data description in practice. *Utrecht University* <https://www.uu.nl/en/research/research-data-management/guides/storing-and-preserving-data/data-description-in-practice>.
* Metadata. *Ghent University* <https://www.ugent.be/en/research/datamanagement/during-research/documentation.htm#Metadata>.
* Metadata for Data Management: A Tutorial. *UNC University Libraries* <https://guides.lib.unc.edu/metadata>.