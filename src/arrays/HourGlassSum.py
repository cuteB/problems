#!/bin/python3

import math
import os
import random
import re
import sys

#
# Complete the 'hourglassSum' function below.
#
# The function is expected to return an INTEGER.
# The function accepts 2D_INTEGER_ARRAY arr as parameter.

def _getHourGlassSum(arr, row, col):
  s = 0
  s += arr[row][col]
  s += arr[row][col+1]
  s += arr[row][col+2]
  s += arr[row+1][col+1]
  s += arr[row+2][col]
  s += arr[row+2][col+1]
  s += arr[row+2][col+2]
  return s

def hourglassSum(arr):
  # Just going to sum all of the hourglasses in the 6x6
  high = float('-inf')

  for i in range(4):
    for j in range(4):
      hSum = _getHourGlassSum(arr, i, j)
      if hSum > high:
        high = hSum

  return high


if __name__ == '__main__':
  fptr = open(os.environ['OUTPUT_PATH'], 'w')

  arr = []

  for _ in range(6):
      arr.append(list(map(int, input().rstrip().split())))

  result = hourglassSum(arr)

  fptr.write(str(result) + '\n')

  fptr.close()
