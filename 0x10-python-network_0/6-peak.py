#!/usr/bin/python3
""" Defines the find_peak function """


def find_peak(list_of_integers):
    """ Function for finding the peak element """
    if not list_of_integers:
        return None

    low = 0
    high = len(list_of_integers) - 1

    while low < high:
        mid = (low + high) // 2

        # Check if mid element is a peak
        if list_of_integers[mid] > list_of_integers[mid + 1]:
            high = mid
        else:
            low = mid + 1

    # The peak element will be at index low
    return list_of_integers[low]
