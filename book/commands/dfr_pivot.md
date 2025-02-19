---
title: dfr pivot
layout: command
version: 0.59.1
usage: |
  Performs a pivot operation on a groupby object
---

# `{{ $frontmatter.title }}`

<div style='white-space: pre-wrap;'>{{ $frontmatter.usage }}</div>

## Signature

```> dfr pivot (pivot_column) (value_column) (operation)```

## Parameters

 -  `pivot_column`: pivot column to perform pivot
 -  `value_column`: value column to perform pivot
 -  `operation`: aggregate operation

## Examples

Pivot a dataframe on b and aggregation on col c
```shell
> [[a b c]; [one x 1] [two y 2]] | dfr to-df | dfr group-by a | dfr pivot b c sum
```
