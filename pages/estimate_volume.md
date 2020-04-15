---
title: How to estimate the volume of a dataset
keywords: Bibliographic research, Data repositories
tags: [getting_started]
summary: "How to estimate the volume of a dataset"
sidebar: mydoc_sidebar
permalink: estimate_volume.html
---


1.	Consider at least all raw data files. Check if also processed data are required by the repository that you want to use to share/store your data.
2.	Estimate file size per sample based on similar files previously generated using similar setting.
3.	Multiply the estimated file size by the number of samples you are going to generate during the project.

For sequencing files (Illumina) 
-	Formula:
    -   One .fastq file for Single-End sequencing
    Fastq MB = Number of million reads  x (60 +  2 x read length in bp)

    -	Paired-End sequencing data produces 2 fastq files
    Fastq MB = Number of million reads  x (60 +  2 x read length in bp) x 2

-	It is recommended to store .fastq files in a compressed format (ex: .gz), which makes the file approximately 4 times smaller.

-	Formula to convert Coverage to Number of reads:
Number of reads needed (Million) = (Coverage x Genome length (bp) / read length) /1000000

If you want to know more about number of reads needed per experiment, coverage and reads length, see RNA-Seq read length and coverage and Coverage and Read Depth for NGS.


{% include links.html %}
