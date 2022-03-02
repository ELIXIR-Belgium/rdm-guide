---
title: Metadata
summary: "“Metadata liberates us, liberates knowledge.” David Weinberger (2008).
"
---

## What is metadata?

Metadata is highly structured data documentation. Highly structured means that information about the data is provided through specific attributes, also called metadata elements or fields. For instance, typical metadata elements of a book in a library are: Title, Author, Publication year, Publisher, Bookcase, Shelf. Thanks to these metadata fields, a specific book can be easily found among many other. Few simple and intuitive examples of “metadata vs data” can be found [here](https://dataedo.com/kb/data-glossary/what-is-metadata).

However, the difference between data and metadata is often unclear and dependent on the research question. What is considered metadata by someone can be used as data by others in a different context. 

## Machine-readable or -actionable metadata
In our digital era, it's important that metadata (as well as the data) is machine-readable or -actionable. However, machine-readable/actionable is different from just digital. A digital object is machine-readable only if its content can be processed by computer programs.

Some of the main aspects that can make a digital file machine-readable/actionable and interoperable (both syntactically and semantically) are:
1. File formats that are data exchange formats (e.g. JSON, XML).
2. (Meta)Data schemas recognised and accepted by communities as standards (e.g. ISA model, OME data model).
3. Sets of metadata attributes or metadata checklists recognised and accepted by communities (e.g. MIAPPE, ENA Samples checklists), that capture reporting best practice in the field.
4. Controlled vocabularies and ontologies recognised and accepted by communities to convey meaning or semantics (e.g. EFO, OBI).

For more information about metadata and machine-actionable (meta)data see [RDMkit](https://rdmkit.elixir-europe.org/index.html) pages [Documentation and metadata](https://rdmkit.elixir-europe.org/metadata_management.html) and [Machine actionability](https://rdmkit.elixir-europe.org/machine_actionability.html).


## Metadata schemas, checklists and where to find them

**(Meta)data schema or model/structure**\\
The (meta)data schema describes the relations, such as hierarchy, of the elements that constitute the (meta)data model or structure.

**Metadata checklist**\\
A metadata checklist is a fixed set of attributes or fields without any particular order nor structure. Compliance to metadata checklists is not related to the format nor the structure, but rather to the content provided.

Although everyone could define a personalised metadata schema and checklist, it is good practice to use schemas and checklists developed by and accepted as standards by research communities and/or data repositories. In metadata schemas and checklists, some attributes could be mandatory, some other only recommended or optional. Often, standard metadata schemas and checklists make use of ontologies and/or controlled vocabularies.

There are many standard metadata schemas and checklists, some generic and some discipline-specific. Metadata schemas such as [Dublin Core](https://guides.library.ucsc.edu/c.php?g=618773&p=4306386), tend to be easy to use and widely adopted, but often need to be expanded in order to cover more specific information. The [European Nucleotide Archive (ENA)](https://www.ebi.ac.uk/ena/submit/checklists) developed [sample checklists](https://www.ebi.ac.uk/ena/browser/checklists) to meet the needs of different research communities to describe biological samples.

Generic and discipline-specific standard metadata schemas and checklists can be found at:
* [Research Data Alliance (RDA)](https://rd-alliance.github.io/metadata-directory/standards/).
* [Digital Curation Center (DCC)](https://www.dcc.ac.uk/guidance/standards/metadata/list).
* [FAIRsharing.org](https://fairsharing.org/standards/).


## Standard metadata and data repositories

Data repositories can use:

* **Standard metadata**\\
The RDA keeps an open knowledge base on research standard metadata along with the [repositories that use them](https://rd-alliance.github.io/metadata-directory/use_cases/). Repositories can be selected based on standard metadata by using [re3data.org](https://www.re3data.org/search?query=).

* **Repository-developed metadata**\\
Some repositories have decided that current standards do not fit their metadata needs, and so they have created their own requirements. Information about a specific metadata schemas and checklists required by a data repository should be found on the repository’s website, usually under the “Help” or “Submit” section. Moreover, lists of repository-developed metadata can be found on [DCC](https://www.dcc.ac.uk/resources/metadata-standards/repository-developed-metadata-schemas) and [RDA](https://rd-alliance.github.io/metadata-directory/standards/repository-developed-metadata-schemas) websites.

Since data repositories can require that submitted datasets must be described according to specific metadata schemas and checklists, it is recommended to consider in [what repository](data_management_steps) your data could be published already at the beginning of your project. Knowing what metadata will be required allows you to easily keep track of all that information, while collecting the data or performing the experiments.


## How to use standard metadata in practice

[Standard metadata in practice](metadata_in_practice)


## Sources and further reading
### Sources
* Data description in practice. *Utrecht University* <https://www.uu.nl/en/research/research-data-management/guides/storing-and-preserving-data/data-description-in-practice>.
* Metadata. *Ghent University* <https://www.ugent.be/en/research/datamanagement/during-research/documentation.htm#Metadata>.
* Metadata for Data Management: A Tutorial. *UNC University Libraries* <https://guides.lib.unc.edu/metadata>.