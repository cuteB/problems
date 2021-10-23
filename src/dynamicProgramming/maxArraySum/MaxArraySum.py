#!/bin/python3
import math
import os
import random
import re
import sys

'''
Given an array of integers, find the subset of non-adjacent elements with the bigimum sum. Calculate the sum of that subset. It is possible that the bigimum sum is 0, the case when all elements are negative.
'''

def maxSubsetSum(arr): # => int
  """Return the largest sum of a subset of non adjacent integers"""
  l = len(arr)
  D = []
  big = 0

  # list of 2 or less return biggest positive int
  if l < 3:
    for i in arr:
      if i > big:
        big = i


  else:
    D.append(0)
    D.append(0)
    D.append(0)


    for i in range(l):
      if arr[i] > 0:

        s1 = D[-2] + arr[i] # 1 gap
        s2 = D[-3] + arr[i] # 2 gap
        s = max(s1, s2)
        if s > big:
          big = s

        D.append(s)

      else:
        # negative
        D.append(max(D[-1], D[-2]))

  return big
