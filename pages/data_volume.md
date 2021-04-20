---
title: Data volume
keywords:
summary: The amount of data generated will affect the choice and cost of storage. It is impossible to predict how much data will be produced, but an estimation can help.
---

## How to estimate the volume of a dataset

1. Consider at least all raw data files. Check if processed data is also required by the journal or the repository that you want to use to publish/store your data.
2. Estimate file size per sample or experiment based on files previously generated using a similar setting.
3. Multiply the estimated file size by the number of samples or experiments you are going to generate during the project.

## Formula to estimate the volume of sequencing files (Illumina)
* One .fastq file for Single-End sequencing
  * .fastq MB = Number of million reads  x (60 +  2 x read length in bp)

* Paired-End sequencing produces 2 fastq files
  * .fastq MB = Number of million reads  x (60 +  2 x read length in bp) x 2
  
  It is recommended to store .fastq files in a **compressed format** (ex: .gz), which makes the file approximately **4 times smaller**.

## Formula to convert Coverage to Number of reads:
* Number of reads needed (Million) = (Coverage x Genome length (bp) / read length) /1000000

If you want to know more about the number of reads needed per experiment, coverage and reads length, see
* [Considerations for RNA-Seq read length and coverage](https://emea.support.illumina.com/bulletins/2017/04/considerations-for-rna-seq-read-length-and-coverage-)
* [Recommended Coverage and Read Depth for NGS Applications](https://genohub.com/recommended-sequencing-coverage-by-application/)
