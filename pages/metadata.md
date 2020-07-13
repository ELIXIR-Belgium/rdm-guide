---
title: Metadata
keywords:
summary: Metadata liberates us, liberates knowledge. David Weinberger, Knowledge at the End of the Information Age. Bertha Bassam lecture, University of Toronto, February 07, 2008.
sidebar: mydoc_sidebar
permalink: metadata.html
---

## Definition of metadata
Metadata means information about the data. In other words, metadata summarizes basic description and information about the data, which makes finding and understanding the data itself easier, for humans and machines.

## What metadata are for
Metadata is as important as data, since it provides all the necessary information to enable finding, understanding and reuse of data by anyone. For example, if you want to find a book in a library, you can usually search for the book by using the following metadata in the library catalogue:
* Author
* Publication year
* Title
* Publisher
* Location

Without these metadata it would be impossible to find the book you are looking for.

## Metadata Schemas and where to find them
A metadata schema is a fixed set of attributes (or metadata fields) about the data that needs to be provided. Some attributes are mandatory, some are only recommended or optional. When creating metadata, it is good practice to not invent your own schema, but to make use of existing metadata schemas accepted as **standards** by several communities. There are many standard metadata schemas, some generic, while others discipline-specific.
* **Generic** metadata schemas, such as [Dublin Core](https://guides.library.ucsc.edu/c.php?g=618773&p=4306386), tend to be easy to use and widely adopted, but often need to be expanded in order to cover more specific information.
* **Discipline-specific** schemas, such as [MIAPPE](https://github.com/MIAPPE/MIAPPE/blob/master/MIAPPE_Checklist-Data-Model-v1.1/MIAPPE_templates/MIAPPEv1.1_training_spreadsheet.xlsx), have a much richer vocabulary and structure, but tend to be highly specialized and only understandable by researchers in that area. The European Nucleotide Archive (ENA) developed [sample checklists](https://www.ebi.ac.uk/ena/browser/checklists) to meet the needs of different research communities to describe biological samples.

Generic and discipline-specific standard metadata schemas can be found on [Research Data Alliance (RDA)](https://rd-alliance.github.io/metadata-directory/standards/) and [Digital Curation Center (DCC)](https://www.dcc.ac.uk/guidance/standards/metadata/list) websites.

## Metadata schema and data repositories
Data repositories can use:
* **Standard metadata schemas**\\
The RDA keeps an open knowledge base on research metadata standards along with the [repositories that use them](https://rd-alliance.github.io/metadata-directory/use_cases/). Repositories can be selected based on metadata standard by using [re3data.org](https://www.re3data.org/search?query=).
* **Repository-Developed metadata schemas**\\
Some repositories have decided that current standards do not fit their metadata needs, and so they have created their own requirements. Information about a specific metadata schema required by a data repository should be found on the repository’s website, usually under the “Help” or “Submit” section. Moreover, lists of Repository-Developed metadata schemas can be found on [DCC](https://www.dcc.ac.uk/resources/metadata-standards/repository-developed-metadata-schemas) and [RDA](https://rd-alliance.github.io/metadata-directory/standards/repository-developed-metadata-schemas) websites.

Since [data repositories](existing_data) can require that submitted datasets must be described according to a specific metadata schema, it is recommended to consider in what repository your data could be published already at the beginning of your project. Knowing what metadata will be required allows you to easily keep track of all that information, while collecting the data or performing the experiments.

## Metadata schema in practice
**Choose metadata schema(s) for your dataset**\\
Before starting your project or your experiments, consider what repositories could be appropriate to publish your datasets. [EMBL-EBI Data Submission wizard](https://www.ebi.ac.uk/submission/) will guide you to the right archive for your data in a few simple steps. For a more complete list of data repositories see [here](existing_data).

After you have found the appropriate repository for your data, download or write down the required metadata schema, or at least the mandatory fields. If the repository doesn’t require a specific metadata schema, you can choose a **generic and/or a discipline-specific** one for your dataset. You can also use more than one schema, for example, to describe a multi-disciplinary dataset, or add attributes of your choice.

**Use metadata in spreadsheets**\\
An easy way to apply metadata to your dataset is using a spreadsheet (such as Excel and Google Sheets). Excel and Google Sheets are a simple way to create metadata schemes with controlled vocabulary drop-down lists (data validation in [Excel](https://support.microsoft.com/en-us/office/create-a-drop-down-list-7693307a-59ef-400a-b769-c5402dce407b?ui=en-us&rs=en-us&ad=us) and [Google Sheets](https://support.google.com/docs/answer/186103?hl=en&ref_topic=1361472)). In practice, you can put attributes or metadata fields in columns, and have one row of values or descriptions per measurement. The top row with the metadata fields can be made write protected (cell protection in [Excel](https://support.microsoft.com/en-us/office/lock-cells-to-protect-them-cb7835f6-9c37-4161-bb53-d1c410acaf21) and [Google Sheets](https://support.google.com/docs/answer/1218656?co=GENIE.Platform%3DDesktop&hl=en) and frozen to be always visible (freeze rows/columns in [Excel](https://support.microsoft.com/en-us/office/freeze-panes-to-lock-rows-and-columns-dab2ffc9-020d-4026-8121-67dd25f2508f) and [Google Sheets](https://support.google.com/docs/answer/9060449?co=GENIE.Platform%3DDesktop&hl=en)).

Usually, a (meta)data sheet holds 30 or more attributes to describe the data. Don’t be afraid to have many attributes in your spreadsheet; on the contrary, with detailed metadata fields you can easily select specific measurements based on the information noted down in the columns.

{% include image.html file="metadata_source.png" caption="<b>Figure 1.</b> Metadata spreadsheet with more than 30 attributes" %}

If applicable include a field that takes the name of the file that actually holds the measurement data and other files that give detailed information (i.e.  the exact protocol used or scripts of analyses done on your samples, etc...).

{% include image.html file="metadata_source_2.png" caption="<b>Figure 2.</b> Metadata spreadsheet with fields that take the name of the used protocol and the datafile containing the raw data." %}

Consider having two metadata sheets:
* One generic about your overall study, containing metadata fields such as “Study Title”, “Study description”, “Experimental Factors”, “Study Design” etc.
* One for describing the individual observation and measurements, containing attributes such as “Replicate N”, “Date”, “Length”, “Datafile name” etc… as column names.

It is also possible to use a [README file](data_documentation) or the first tab of a spreadsheet to describe metadata fields about the overall study and define controlled vocabularies for the attributes in the columns. To avoid confusion on the interpretation of the value of metadata fields, you should always have the exact definition and scope of your used metadata fields. If you use **standard** metadata, you can refer to the definitions of the standard, rather than having to describe the metadata fields yourself in a data dictionary (or glossary or codebook). For example, not everybody understands automatically that ‘length’ describes how tall a subject is, or how it is measured.

{% include image.html file="metadata.png" caption="<b>Figure 3.</b> Metadata fields description and controlled vocabulary." %}

Especially if you work with several people in a project, or similar experiments or measurements are done regularly in your research group, it is a good idea to develop metadata schemes for the collected data and have controlled vocabulary to fill in these schemes. If you standardise your metadata sheet, it can be reused and different experiments can be easily compared.

## Tips
1. **Make metadata sheets before or simultaneously with data production.** You could start making them while you are writing the project or the data management plan. It will help you estimate data volume and potential ethical issues.

2. **Add all information needed to understand and reproduce your experiments as metadata:** dose, time, date, frequency, measurement unit, geographical coordinates, unexpected events, parameter settings, name and version of the software used etc…. Include reference to used protocols and raw or processed datafiles. Add also variables that you don’t need immediately (ex: age or sex), but that could be useful to “your futute-self” and others in the future. The context of the data generation should be richly annotated to maximize its reusability: mention any particularities or limitations about the data that other users should be aware of. Ensure that all variable names are explained or self-explanatory (i.e., defined in the research field’s controlled vocabulary). Clearly specify the version of the archived and/or reused data.

3. **Use controlled vocabulary and data validation** as much as you can to avoid mistakes, such as typos, misspelling, synonymous etc.

4. **Use standard metadata schema and [ontology](ontology)** as much as possible, so that your data can be reused and different experiments can be easily compared.

5. **Do not include calculation nor graphs in the metadata sheet.** Metadata sheet should only contain metadata and/or raw data. For calculation and graphs, make a copy of the spreadsheet.

6. **Do not use colour code as (meta)data and do not combine multiple variables in one cell.**


For more information about data organisation in spreadsheet, see the following websites:
* [Data organisation in spreadsheets](https://www.tandfonline.com/doi/full/10.1080/00031305.2017.1375989).
* [Data carpentry: Formatting data table in spreadsheets](https://datacarpentry.org/spreadsheet-ecology-lesson/01-format-data/index) and [Formatting problems](https://datacarpentry.org/spreadsheet-ecology-lesson/02-common-mistakes/#tabs).
* [Preparing tabular data for description and archiving](https://data.research.cornell.edu/content/tabular-data
), Cornell University.
* Pivot Table in [Excel](https://support.microsoft.com/en-us/office/create-a-pivottable-to-analyze-worksheet-data-a9a84538-bfe9-40a9-a8e9-f99134456576) and [Google Sheets](https://support.google.com/docs/answer/1272900?co=GENIE.Platform%3DDesktop&hl=en).

## References
[Data description in practice](https://www.uu.nl/en/research/research-data-management/guides/storing-and-preserving-data/data-description-in-practice#building), Utrecht University.\\
[Metadata](https://www.ugent.be/en/research/datamanagement/during-research/documentation.htm#Metadata), UGent.\\
[UNC Library guide on metadata](https://guides.lib.unc.edu/metadata).\\
[Research Data Alliance (RDA)](https://www.rd-alliance.org/) - Metadata Standards Directory [Working Group](https://rd-alliance.github.io/metadata-directory/).\\
The [Research Data Management Group](https://data.research.cornell.edu/) at Cornell.\\
[GO FAIR Principles](https://www.go-fair.org/fair-principles/).
