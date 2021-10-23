import pytest
from MaxArraySum import maxSubsetSum

@pytest.fixture(autouse=True)
def before_and_after_test(tmpdir):
  # ^^^ before ^^^
  yield # run the rest
  # vvv After vvv

def test_EmptyList(tmpdir):
  """An empty list returns 0"""
  arr = []
  exp = 0
  act = maxSubsetSum(arr)
  assert exp == act

def test_AllNegativeList(tmpdir):
  """All negatives return 0, biggest subset is []"""
  arr = [-1, -2, -3]
  exp = 0
  act = maxSubsetSum(arr)
  assert exp == act

def test_SingleNumber(tmpdir):
  """Return the value"""
  arr = [6]
  exp = 6
  act = maxSubsetSum(arr)
  assert exp == act

def test_TwoNumbers(tmpdir):
  """Return Bigger number"""
  arr = [1, 2]
  exp = 2
  act = maxSubsetSum(arr)
  assert exp == act

def test_OutsideOfThreeNumbers(tmpdir):
  """Return the sum of the outside numbers"""
  arr = [1, 2, 3]
  exp = 4
  act = maxSubsetSum(arr)
  assert exp == act

def test_InsideOfTwoNumbers(tmpdir):
  """Return the inside number"""
  arr = [1, 9, 2]
  exp = 9
  act = maxSubsetSum(arr)
  assert exp == act

def test_BasicTestWithNegative(tmpdir):
  """Basic test of a longer list with negative values"""
  arr = [-2, 1, 3, -4, 5]
  exp = 8
  act = maxSubsetSum(arr)
  assert exp == act

def test_AllPositiveList(tmpdir):
  """Return Bigger number"""
  arr = [2, 1, 5, 8, 4]
  exp = 11
  act = maxSubsetSum(arr)
  assert exp == act

def test_SampleTestCase2(tmpdir):
  """Another test from the site"""
  arr = [3, 5, -7, 8, 10]
  exp = 15
  act = maxSubsetSum(arr)
  assert exp == act

def test_SampleTestCase0(tmpdir):
  """Another test from the site"""
  arr = [3, 7, 4, 6, 5]
  exp = 13
  act = maxSubsetSum(arr)
  assert exp == act

def test_SpaceOfTwo(tmpdir):
  """Use two values separated by two"""
  arr = [30, 1, 2, 15]
  exp = 45
  act = maxSubsetSum(arr)
  assert exp == act
