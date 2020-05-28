---
title: File formats
keywords:
summary: Data is only as good as the format it is saved in. The format of a file determines which programs can be used to access it.
sidebar: mydoc_sidebar
permalink: file_formats.html
---

## Open vs Proprietary
Data is only as good as the format it is saved in. The format of a file determines which software can be used to access it.

**Files in OPEN format (our favourite)**<br/>
* can be opened by anyone using different types of open-source, free or licensed software
* are less prone to become obsolete, because a variety of software should be able to open them
* Have a free format specification (i.e. no patent restrictions)
* examples: *file.csv* and *file.pdf* can be opened by any text editor or spreadsheet program and any pdf readers, respectively
* List of open formats: https://en.wikipedia.org/wiki/List_of_open_formats

**Files in PROPRIETARY format (non-preferred)**<br>
* Can only be opened using paid-license software
* tend to be replaced by new versions or new formats, limiting their future reuse
* Have an either patented or trade-secret specification
* examples: *file.xls* and *file.ppt* can be opened only by people that own a license for Microsoft Office Software<!--- this is a bit contentious, as you can use OpenOffice or LobreOffice to open MS office files, granted sometimes they don't look so good --->
* List of proprietary software: https://en.wikipedia.org/wiki/Proprietary_format

## Recommended file formats
[UGent](https://www.ugent.be/en/research/datamanagement/during-research/collection.htm) provides guidelines for choosing the right format for research data.

**Recommended file formats can be found via:**<br>
* DANS, [File formats](https://dans.knaw.nl/en/about/services/easy/information-about-depositing-data/before-depositing/file-formats)
* UK Data Service, [Recommended formats](https://www.ukdataservice.ac.uk/manage-data/format/recommended-formats)

## Is my file format open? <!--- this section needs work. Should we include the best-practice open format for each area and technology? There is no way we can include all possible file formats --->
Area | Technology | Format | Open
------|-----------|--------|-----
Genomics | Sequencing | fastq | yes
Proteomics | Mass spectroscopy | mzXML or mzML | yes
