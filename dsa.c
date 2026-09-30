#include <stdio.h>

int countSmaller(int nums[], int numsSize, int* returnSize) {
   

    int counter_small_right[numsSize] ;

    for (int i = 0; i < numsSize; i++) {
        counter_small_right[i] = 0;
    }

    for (int i = 0; i < numsSize; i++) {
        for (int j = i + 1; j < numsSize; j++) {
            if (nums[j] < nums[i]) {
                counter_small_right[i] += 1;
            }
        }
    }

   
    for (int i = 0; i < numsSize; i++)
    {
        printf("[%d]", counter_small_right[i]);
    }
    

    return 0;   // only to make the function compile
}

int main() {
    int nums[] = {5, 2, 6, 1};
    int numsSize = sizeof(nums) / sizeof(nums[0]);
    int returnSize;

    countSmaller(nums, numsSize, &returnSize);

    return 0;
}