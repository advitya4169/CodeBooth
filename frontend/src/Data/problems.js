
export const PROBLEMS = {
  "two-sum": {
    id: "two-sum",
    title: "Two Sum",
    difficulty: "Easy",
    category: "Array • Hash Table",
    description: {
      text: "Given an array of integers nums and an integer target, return indices of the two numbers in the array such that they add up to target.",
      notes: [
        "You may assume that each input would have exactly one solution, and you may not use the same element twice.",
        "You can return the answer in any order.",
      ],
    },
    examples: [
      {
        input: "nums = [2,7,11,15], target = 9",
        output: "[0,1]",
        explanation: "Because nums[0] + nums[1] == 9, we return [0, 1].",
      },
      {
        input: "nums = [3,2,4], target = 6",
        output: "[1,2]",
      },
      {
        input: "nums = [3,3], target = 6",
        output: "[0,1]",
      },
    ],
    constraints: [
      "2 ≤ nums.length ≤ 10⁴",
      "-10⁹ ≤ nums[i] ≤ 10⁹",
      "-10⁹ ≤ target ≤ 10⁹",
      "Only one valid answer exists",
    ],
    starterCode: {
      javascript: `function twoSum(nums, target) {
  // Write your solution here
  
}

// Test cases (sort because either valid index order is accepted)
console.log(twoSum([2, 7, 11, 15], 9).sort((a, b) => a - b)); // Expected: [0, 1]
console.log(twoSum([3, 2, 4], 6).sort((a, b) => a - b)); // Expected: [1, 2]
console.log(twoSum([3, 3], 6).sort((a, b) => a - b)); // Expected: [0, 1]`,
      python: `def twoSum(nums, target):
    # Write your solution here
    pass

# Test cases (sort because either valid index order is accepted)
print(sorted(twoSum([2, 7, 11, 15], 9)))  # Expected: [0, 1]
print(sorted(twoSum([3, 2, 4], 6)))  # Expected: [1, 2]
print(sorted(twoSum([3, 3], 6)))  # Expected: [0, 1]`,
      cpp: `#include <algorithm>
#include <iostream>
#include <vector>

using namespace std;

class Solution {
public:
    vector<int> twoSum(vector<int>& nums, int target) {
        // Write your solution here
        
        return {};
    }
};

void printVector(const vector<int>& v) {
    cout << "[";
    for (int i = 0; i < v.size(); i++) {
        cout << v[i] << (i == v.size() - 1 ? "" : ", ");
    }
    cout << "]\\n";
}

int main() {
    Solution sol;
    vector<int> nums1 = {2, 7, 11, 15};
    auto result1 = sol.twoSum(nums1, 9); sort(result1.begin(), result1.end());
    printVector(result1); // Expected: [0, 1]
    
    vector<int> nums2 = {3, 2, 4};
    auto result2 = sol.twoSum(nums2, 6); sort(result2.begin(), result2.end());
    printVector(result2); // Expected: [1, 2]
    
    vector<int> nums3 = {3, 3};
    auto result3 = sol.twoSum(nums3, 6); sort(result3.begin(), result3.end());
    printVector(result3); // Expected: [0, 1]
    
    return 0;
}`,
    },
    expectedOutput: {
      javascript: "[0,1]\n[1,2]\n[0,1]",
      python: "[0, 1]\n[1, 2]\n[0, 1]",
      cpp: "[0, 1]\n[1, 2]\n[0, 1]",
    },
  },

  "reverse-string": {
    id: "reverse-string",
    title: "Reverse String",
    difficulty: "Easy",
    category: "String • Two Pointers",
    description: {
      text: "Write a function that reverses a string. The input string is given as an array of characters s.",
      notes: ["You must do this by modifying the input array in-place with O(1) extra memory."],
    },
    examples: [
      {
        input: 's = ["h","e","l","l","o"]',
        output: '["o","l","l","e","h"]',
      },
      {
        input: 's = ["H","a","n","n","a","h"]',
        output: '["h","a","n","n","a","H"]',
      },
    ],
    constraints: ["1 ≤ s.length ≤ 10⁵", "s[i] is a printable ascii character"],
    starterCode: {
      javascript: `function reverseString(s) {
  // Write your solution here
  
}

// Test cases
let test1 = ["h","e","l","l","o"];
reverseString(test1);
console.log(test1); // Expected: ["o","l","l","e","h"]

let test2 = ["H","a","n","n","a","h"];
reverseString(test2);
console.log(test2); // Expected: ["h","a","n","n","a","H"]`,
      python: `def reverseString(s):
    # Write your solution here
    pass

# Test cases
test1 = ["h","e","l","l","o"]
reverseString(test1)
print(test1)  # Expected: ["o","l","l","e","h"]

test2 = ["H","a","n","n","a","h"]
reverseString(test2)
print(test2)  # Expected: ["h","a","n","n","a","H"]`,
      cpp: `#include <iostream>
#include <vector>

using namespace std;

class Solution {
public:
    void reverseString(vector<char>& s) {
        // Write your solution here
        
    }
};

void printVector(const vector<char>& v) {
    cout << "[";
    for (int i = 0; i < v.size(); i++) {
        cout << v[i] << (i == v.size() - 1 ? "" : ", ");
    }
    cout << "]\\n";
}

int main() {
    Solution sol;
    
    vector<char> test1 = {'h','e','l','l','o'};
    sol.reverseString(test1);
    printVector(test1); // Expected: [o, l, l, e, h]
    
    vector<char> test2 = {'H','a','n','n','a','h'};
    sol.reverseString(test2);
    printVector(test2); // Expected: [h, a, n, n, a, H]
    
    return 0;
}`,
    },
    expectedOutput: {
      javascript: "['o','l','l','e','h']\n['h','a','n','n','a','H']",
      python: "['o', 'l', 'l', 'e', 'h']\n['h', 'a', 'n', 'n', 'a', 'H']",
      cpp: "[o, l, l, e, h]\n[h, a, n, n, a, H]",
    },
  },

  "valid-palindrome": {
    id: "valid-palindrome",
    title: "Valid Palindrome",
    difficulty: "Easy",
    category: "String • Two Pointers",
    description: {
      text: "A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.",
      notes: ["Given a string s, return true if it is a palindrome, or false otherwise."],
    },
    examples: [
      {
        input: 's = "A man, a plan, a canal: Panama"',
        output: "true",
        explanation: '"amanaplanacanalpanama" is a palindrome.',
      },
      {
        input: 's = "race a car"',
        output: "false",
        explanation: '"raceacar" is not a palindrome.',
      },
      {
        input: 's = " "',
        output: "true",
        explanation:
          "After removing the space, the normalized string is empty, which reads the same forward and backward.",
      },
    ],
    constraints: ["1 ≤ s.length ≤ 2 * 10⁵", "s consists only of printable ASCII characters"],
    starterCode: {
      javascript: `function isPalindrome(s) {
  // Write your solution here
  
}

// Test cases
console.log(isPalindrome("A man, a plan, a canal: Panama")); // Expected: true
console.log(isPalindrome("race a car")); // Expected: false
console.log(isPalindrome(" ")); // Expected: true`,
      python: `def isPalindrome(s):
    # Write your solution here
    pass

# Test cases
print(isPalindrome("A man, a plan, a canal: Panama"))  # Expected: True
print(isPalindrome("race a car"))  # Expected: False
print(isPalindrome(" "))  # Expected: True`,
      cpp: `#include <iostream>
#include <string>

using namespace std;

class Solution {
public:
    bool isPalindrome(string s) {
        // Write your solution here
        
        return false;
    }
};

int main() {
    Solution sol;
    cout << (sol.isPalindrome("A man, a plan, a canal: Panama") ? "true" : "false") << endl; // Expected: true
    cout << (sol.isPalindrome("race a car") ? "true" : "false") << endl; // Expected: false
    cout << (sol.isPalindrome(" ") ? "true" : "false") << endl; // Expected: true
    return 0;
}`,
    },
    expectedOutput: {
      javascript: "true\nfalse\ntrue",
      python: "True\nFalse\nTrue",
      cpp: "true\nfalse\ntrue",
    },
  },

  "maximum-subarray": {
    id: "maximum-subarray",
    title: "Maximum Subarray",
    difficulty: "Medium",
    category: "Array • Dynamic Programming",
    description: {
      text: "Given an integer array nums, find the subarray with the largest sum, and return its sum.",
      notes: [],
    },
    examples: [
      {
        input: "nums = [-2,1,-3,4,-1,2,1,-5,4]",
        output: "6",
        explanation: "The subarray [4,-1,2,1] has the largest sum 6.",
      },
      {
        input: "nums = [1]",
        output: "1",
        explanation: "The subarray [1] has the largest sum 1.",
      },
      {
        input: "nums = [5,4,-1,7,8]",
        output: "23",
        explanation: "The subarray [5,4,-1,7,8] has the largest sum 23.",
      },
    ],
    constraints: ["1 ≤ nums.length ≤ 10⁵", "-10⁴ ≤ nums[i] ≤ 10⁴"],
    starterCode: {
      javascript: `function maxSubArray(nums) {
  // Write your solution here
  
}

// Test cases
console.log(maxSubArray([-2,1,-3,4,-1,2,1,-5,4])); // Expected: 6
console.log(maxSubArray([1])); // Expected: 1
console.log(maxSubArray([5,4,-1,7,8])); // Expected: 23`,
      python: `def maxSubArray(nums):
    # Write your solution here
    pass

# Test cases
print(maxSubArray([-2,1,-3,4,-1,2,1,-5,4]))  # Expected: 6
print(maxSubArray([1]))  # Expected: 1
print(maxSubArray([5,4,-1,7,8]))  # Expected: 23`,
      cpp: `#include <iostream>
#include <vector>

using namespace std;

class Solution {
public:
    int maxSubArray(vector<int>& nums) {
        // Write your solution here
        
        return 0;
    }
};

int main() {
    Solution sol;
    vector<int> nums1 = {-2,1,-3,4,-1,2,1,-5,4};
    cout << sol.maxSubArray(nums1) << endl; // Expected: 6
    
    vector<int> nums2 = {1};
    cout << sol.maxSubArray(nums2) << endl; // Expected: 1
    
    vector<int> nums3 = {5,4,-1,7,8};
    cout << sol.maxSubArray(nums3) << endl; // Expected: 23
    
    return 0;
}`,
    },
    expectedOutput: {
      javascript: "6\n1\n23",
      python: "6\n1\n23",
      cpp: "6\n1\n23",
    },
  },

  "container-with-most-water": {
    id: "container-with-most-water",
    title: "Container With Most Water",
    difficulty: "Medium",
    category: "Array • Two Pointers",
    description: {
      text: "You are given an integer array height of length n. There are n vertical lines drawn such that the two endpoints of the ith line are (i, 0) and (i, height[i]).",
      notes: [
        "Find two lines that together with the x-axis form a container, such that the container contains the most water.",
        "Return the maximum amount of water a container can store.",
        "Notice that you may not slant the container.",
      ],
    },
    examples: [
      {
        input: "height = [1,8,6,2,5,4,8,3,7]",
        output: "49",
        explanation:
          "The vertical lines are represented by array [1,8,6,2,5,4,8,3,7]. In this case, the max area of water the container can contain is 49.",
      },
      {
        input: "height = [1,1]",
        output: "1",
      },
    ],
    constraints: ["n == height.length", "2 ≤ n ≤ 10⁵", "0 ≤ height[i] ≤ 10⁴"],
    starterCode: {
      javascript: `function maxArea(height) {
  // Write your solution here
  
}

// Test cases
console.log(maxArea([1,8,6,2,5,4,8,3,7])); // Expected: 49
console.log(maxArea([1,1])); // Expected: 1`,
      python: `def maxArea(height):
    # Write your solution here
    pass

# Test cases
print(maxArea([1,8,6,2,5,4,8,3,7]))  # Expected: 49
print(maxArea([1,1]))  # Expected: 1`,
      cpp: `#include <iostream>
#include <vector>

using namespace std;

class Solution {
public:
    int maxArea(vector<int>& height) {
        // Write your solution here
        
        return 0;
    }
};

int main() {
    Solution sol;
    vector<int> h1 = {1,8,6,2,5,4,8,3,7};
    cout << sol.maxArea(h1) << endl; // Expected: 49
    
    vector<int> h2 = {1,1};
    cout << sol.maxArea(h2) << endl; // Expected: 1
    
    return 0;
}`,
    },
    expectedOutput: {
      javascript: "49\n1",
      python: "49\n1",
      cpp: "49\n1",
    },
  },

  "range-sum-query": {
    id: "range-sum-query",
    title: "Range Sum Query",
    difficulty: "Easy",
    category: "Array • Prefix Sum",
    description: {
      text: "Given an integer array and several inclusive ranges, return the sum of the values inside each range.",
      notes: ["Each range is provided as a pair [left, right]. Build any reusable structure you need before answering the queries."],
    },
    examples: [{ input: "nums = [2,4,1,3], queries = [[0,2],[1,3]]", output: "[7,8]", explanation: "The requested sums are 2 + 4 + 1 and 4 + 1 + 3." }],
    constraints: ["1 ≤ nums.length ≤ 10⁵", "1 ≤ queries.length ≤ 10⁴", "0 ≤ left ≤ right < nums.length"],
    starterCode: {
      javascript: `function rangeSums(nums, queries) {\n  // Return one sum for each [left, right] query.\n}\n\nconsole.log(JSON.stringify(rangeSums([2,4,1,3], [[0,2],[1,3]])));`,
      python: `def rangeSums(nums, queries):\n    # Return one sum for each [left, right] query.\n    pass\n\nprint(rangeSums([2,4,1,3], [[0,2],[1,3]]))`,
      cpp: `#include <iostream>\n#include <vector>\nusing namespace std;\nvector<int> rangeSums(vector<int> nums, vector<vector<int>> queries) {\n    // Return one sum for each [left, right] query.\n    return {};\n}\nint main() {\n    for (int x : rangeSums({2,4,1,3}, {{0,2},{1,3}})) cout << x << " ";\n}`,
    },
    expectedOutput: { javascript: "[7,8]", python: "[7, 8]", cpp: "7 8" },
  },

  "first-repeated-value": {
    id: "first-repeated-value",
    title: "First Repeated Value",
    difficulty: "Easy",
    category: "Hash Table • Lookup",
    description: {
      text: "Scan an integer sequence from left to right and return the first value whose second occurrence is encountered. Return -1 when every value is distinct.",
      notes: ["The answer is based on the order of the second occurrence, not the value's first position."],
    },
    examples: [{ input: "nums = [4,7,2,7,4]", output: "7", explanation: "The second 7 appears before the second 4." }],
    constraints: ["0 ≤ nums.length ≤ 10⁵", "-10⁹ ≤ nums[i] ≤ 10⁹"],
    starterCode: {
      javascript: `function firstRepeatedValue(nums) {\n  // Return the first value seen for a second time, or -1.\n}\n\nconsole.log(firstRepeatedValue([4,7,2,7,4]));\nconsole.log(firstRepeatedValue([1,2,3]));`,
      python: `def firstRepeatedValue(nums):\n    # Return the first value seen for a second time, or -1.\n    pass\n\nprint(firstRepeatedValue([4,7,2,7,4]))\nprint(firstRepeatedValue([1,2,3]))`,
      cpp: `#include <iostream>\n#include <vector>\nusing namespace std;\nint firstRepeatedValue(vector<int> nums) {\n    // Return the first value seen for a second time, or -1.\n    return -1;\n}\nint main() { cout << firstRepeatedValue({4,7,2,7,4}) << endl << firstRepeatedValue({1,2,3}) << endl; }`,
    },
    expectedOutput: { javascript: "7\n-1", python: "7\n-1", cpp: "7\n-1" },
  },

  "longest-unique-substring": {
    id: "longest-unique-substring",
    title: "Longest Unique Substring",
    difficulty: "Medium",
    category: "String • Sliding Window",
    description: {
      text: "Return the length of the longest contiguous substring that contains no repeated characters.",
      notes: ["An empty string has a longest unique substring of length 0."],
    },
    examples: [{ input: 's = "abcaefbb"', output: "5", explanation: '"bcaef" is a longest substring with all distinct characters.' }],
    constraints: ["0 ≤ s.length ≤ 10⁵", "s contains printable ASCII characters"],
    starterCode: {
      javascript: `function longestUniqueSubstring(s) {\n  // Return the maximum length of a no-repeat window.\n}\n\nconsole.log(longestUniqueSubstring("abcaefbb"));\nconsole.log(longestUniqueSubstring("aaaa"));`,
      python: `def longestUniqueSubstring(s):\n    # Return the maximum length of a no-repeat window.\n    pass\n\nprint(longestUniqueSubstring("abcaefbb"))\nprint(longestUniqueSubstring("aaaa"))`,
      cpp: `#include <iostream>\n#include <string>\nusing namespace std;\nint longestUniqueSubstring(string s) {\n    // Return the maximum length of a no-repeat window.\n    return 0;\n}\nint main() { cout << longestUniqueSubstring("abcaefbb") << endl << longestUniqueSubstring("aaaa") << endl; }`,
    },
    expectedOutput: { javascript: "5\n1", python: "5\n1", cpp: "5\n1" },
  },

  "middle-of-linked-list": {
    id: "middle-of-linked-list",
    title: "Middle of a Linked List",
    difficulty: "Easy",
    category: "Linked List • Fast and Slow Pointers",
    description: {
      text: "A singly linked list is represented by a values array and a next-index array; -1 marks the end. Return the value at the middle node, choosing the second middle when the list length is even.",
      notes: ["The head is an index into both arrays. The list is non-empty and contains no cycle."],
    },
    examples: [{ input: "values = [8,3,9,5,1], next = [1,2,3,4,-1], head = 0", output: "9" }],
    constraints: ["1 ≤ reachable nodes ≤ 10⁵", "Each reachable node has at most one next node"],
    starterCode: {
      javascript: `function middleValue(values, next, head) {\n  // Follow next links and return the second middle value when needed.\n}\n\nconsole.log(middleValue([8,3,9,5,1], [1,2,3,4,-1], 0));\nconsole.log(middleValue([4,6,2,7], [1,2,3,-1], 0));`,
      python: `def middleValue(values, next_nodes, head):\n    # Follow next links and return the second middle value when needed.\n    pass\n\nprint(middleValue([8,3,9,5,1], [1,2,3,4,-1], 0))\nprint(middleValue([4,6,2,7], [1,2,3,-1], 0))`,
      cpp: `#include <iostream>\n#include <vector>\nusing namespace std;\nint middleValue(vector<int> values, vector<int> next, int head) {\n    // Follow next links and return the second middle value when needed.\n    return -1;\n}\nint main() { cout << middleValue({8,3,9,5,1},{1,2,3,4,-1},0) << endl << middleValue({4,6,2,7},{1,2,3,-1},0) << endl; }`,
    },
    expectedOutput: { javascript: "9\n2", python: "9\n2", cpp: "9\n2" },
  },

  "ticket-queue-time": {
    id: "ticket-queue-time",
    title: "Ticket Queue Time",
    difficulty: "Easy",
    category: "Queue • Simulation",
    description: {
      text: "People stand in a queue to buy tickets. Each turn, the person at the front buys one ticket and returns to the back if they still need more. Return how many turns pass before the person at index target finishes.",
      notes: ["Every person starts with a positive number of tickets to buy."],
    },
    examples: [{ input: "tickets = [2,3,2], target = 2", output: "6" }],
    constraints: ["1 ≤ tickets.length ≤ 100", "1 ≤ tickets[i] ≤ 100", "0 ≤ target < tickets.length"],
    starterCode: {
      javascript: `function ticketQueueTime(tickets, target) {\n  // Simulate turns until the target person finishes.\n}\n\nconsole.log(ticketQueueTime([2,3,2], 2));\nconsole.log(ticketQueueTime([5], 0));`,
      python: `def ticketQueueTime(tickets, target):\n    # Simulate turns until the target person finishes.\n    pass\n\nprint(ticketQueueTime([2,3,2], 2))\nprint(ticketQueueTime([5], 0))`,
      cpp: `#include <iostream>\n#include <vector>\nusing namespace std;\nint ticketQueueTime(vector<int> tickets, int target) {\n    // Simulate turns until the target person finishes.\n    return 0;\n}\nint main() { cout << ticketQueueTime({2,3,2},2) << endl << ticketQueueTime({5},0) << endl; }`,
    },
    expectedOutput: { javascript: "6\n5", python: "6\n5", cpp: "6\n5" },
  },

  "valid-brackets": {
    id: "valid-brackets",
    title: "Valid Brackets",
    difficulty: "Easy",
    category: "Stack • Matching",
    description: {
      text: "Given a string containing only (), [], and {}, determine whether every opening bracket is closed by the correct type in the correct order.",
      notes: ["An empty string is valid."],
    },
    examples: [{ input: 's = "{[()]}"', output: "true" }, { input: 's = "([)]"', output: "false" }],
    constraints: ["0 ≤ s.length ≤ 10⁴", "s contains only bracket characters"],
    starterCode: {
      javascript: `function validBrackets(s) {\n  // Return a boolean.\n}\n\nconsole.log(validBrackets("{[()]}") ? "true" : "false");\nconsole.log(validBrackets("([)]") ? "true" : "false");`,
      python: `def validBrackets(s):\n    # Return a boolean.\n    pass\n\nprint(str(validBrackets("{[()]}" )).lower())\nprint(str(validBrackets("([)]" )).lower())`,
      cpp: `#include <iostream>\n#include <string>\nusing namespace std;\nbool validBrackets(string s) {\n    // Return whether all brackets close in order.\n    return false;\n}\nint main() { cout << (validBrackets("{[()]}") ? "true" : "false") << endl << (validBrackets("([)]") ? "true" : "false") << endl; }`,
    },
    expectedOutput: { javascript: "true\nfalse", python: "true\nfalse", cpp: "true\nfalse" },
  },

  "lower-bound": {
    id: "lower-bound",
    title: "Lower Bound",
    difficulty: "Easy",
    category: "Binary Search • Boundaries",
    description: {
      text: "Given a sorted integer array and a target, return the first index whose value is greater than or equal to the target. If no such value exists, return the array length.",
      notes: [],
    },
    examples: [{ input: "nums = [1,3,3,8], target = 3", output: "1" }, { input: "nums = [1,3,3,8], target = 9", output: "4" }],
    constraints: ["0 ≤ nums.length ≤ 10⁵", "nums is sorted in non-decreasing order"],
    starterCode: {
      javascript: `function lowerBound(nums, target) {\n  // Return the first qualifying index, or nums.length.\n}\n\nconsole.log(lowerBound([1,3,3,8], 3));\nconsole.log(lowerBound([1,3,3,8], 9));`,
      python: `def lowerBound(nums, target):\n    # Return the first qualifying index, or len(nums).\n    pass\n\nprint(lowerBound([1,3,3,8], 3))\nprint(lowerBound([1,3,3,8], 9))`,
      cpp: `#include <iostream>\n#include <vector>\nusing namespace std;\nint lowerBound(vector<int> nums, int target) {\n    // Return the first qualifying index, or nums.size().\n    return 0;\n}\nint main() { cout << lowerBound({1,3,3,8},3) << endl << lowerBound({1,3,3,8},9) << endl; }`,
    },
    expectedOutput: { javascript: "1\n4", python: "1\n4", cpp: "1\n4" },
  },

  "maximum-tree-depth": {
    id: "maximum-tree-depth",
    title: "Maximum Tree Depth",
    difficulty: "Easy",
    category: "Tree • Depth First Search",
    description: {
      text: "A binary tree is encoded in level order, with -1 representing a missing node. Return the number of nodes on the longest path from the root to a leaf.",
      notes: ["The input is either empty or represents a valid tree rooted at index 0."],
    },
    examples: [{ input: "nodes = [5,2,8,-1,3]", output: "3" }, { input: "nodes = []", output: "0" }],
    constraints: ["0 ≤ nodes.length ≤ 10⁴", "-1 is reserved to indicate a missing node"],
    starterCode: {
      javascript: `function maximumTreeDepth(nodes) {\n  // Return the root-to-leaf depth of this level-order tree.\n}\n\nconsole.log(maximumTreeDepth([5,2,8,-1,3]));\nconsole.log(maximumTreeDepth([]));`,
      python: `def maximumTreeDepth(nodes):\n    # Return the root-to-leaf depth of this level-order tree.\n    pass\n\nprint(maximumTreeDepth([5,2,8,-1,3]))\nprint(maximumTreeDepth([]))`,
      cpp: `#include <iostream>\n#include <vector>\nusing namespace std;\nint maximumTreeDepth(vector<int> nodes) {\n    // Return the root-to-leaf depth of this level-order tree.\n    return 0;\n}\nint main() { cout << maximumTreeDepth({5,2,8,-1,3}) << endl << maximumTreeDepth({}) << endl; }`,
    },
    expectedOutput: { javascript: "3\n0", python: "3\n0", cpp: "3\n0" },
  },

  "bst-successor": {
    id: "bst-successor",
    title: "BST Successor Value",
    difficulty: "Medium",
    category: "BST • Search",
    description: {
      text: "Given the values in a binary search tree and a target that exists in it, return the smallest value strictly greater than the target. Return -1 if the target is the maximum.",
      notes: ["The values are distinct. The input is provided in sorted order to represent the tree's in-order traversal."],
    },
    examples: [{ input: "inorder = [2,5,7,11,14], target = 7", output: "11" }],
    constraints: ["1 ≤ inorder.length ≤ 10⁵", "inorder is strictly increasing", "target is present in inorder"],
    starterCode: {
      javascript: `function successorValue(inorder, target) {\n  // Return the next in-order value, or -1.\n}\n\nconsole.log(successorValue([2,5,7,11,14], 7));\nconsole.log(successorValue([2,5,7,11,14], 14));`,
      python: `def successorValue(inorder, target):\n    # Return the next in-order value, or -1.\n    pass\n\nprint(successorValue([2,5,7,11,14], 7))\nprint(successorValue([2,5,7,11,14], 14))`,
      cpp: `#include <iostream>\n#include <vector>\nusing namespace std;\nint successorValue(vector<int> inorder, int target) {\n    // Return the next in-order value, or -1.\n    return -1;\n}\nint main() { cout << successorValue({2,5,7,11,14},7) << endl << successorValue({2,5,7,11,14},14) << endl; }`,
    },
    expectedOutput: { javascript: "11\n-1", python: "11\n-1", cpp: "11\n-1" },
  },

  "kth-largest": {
    id: "kth-largest",
    title: "Kth Largest Value",
    difficulty: "Medium",
    category: "Heap • Priority Queue",
    description: {
      text: "Return the k-th largest value in an integer array, counting duplicate values as separate positions in sorted order.",
      notes: ["A heap or another approach with comparable performance is expected."],
    },
    examples: [{ input: "nums = [7,2,9,4,9,1], k = 3", output: "7" }],
    constraints: ["1 ≤ k ≤ nums.length ≤ 10⁵", "-10⁹ ≤ nums[i] ≤ 10⁹"],
    starterCode: {
      javascript: `function kthLargest(nums, k) {\n  // Return the value at sorted position k from largest.\n}\n\nconsole.log(kthLargest([7,2,9,4,9,1], 3));\nconsole.log(kthLargest([5,5,2], 2));`,
      python: `def kthLargest(nums, k):\n    # Return the value at sorted position k from largest.\n    pass\n\nprint(kthLargest([7,2,9,4,9,1], 3))\nprint(kthLargest([5,5,2], 2))`,
      cpp: `#include <iostream>\n#include <vector>\nusing namespace std;\nint kthLargest(vector<int> nums, int k) {\n    // Return the value at sorted position k from largest.\n    return 0;\n}\nint main() { cout << kthLargest({7,2,9,4,9,1},3) << endl << kthLargest({5,5,2},2) << endl; }`,
    },
    expectedOutput: { javascript: "7\n5", python: "7\n5", cpp: "7\n5" },
  },

  "count-islands": {
    id: "count-islands",
    title: "Count Connected Land Regions",
    difficulty: "Medium",
    category: "Graph • Grid Traversal",
    description: {
      text: "In a rectangular grid of 0s and 1s, count the connected regions of 1s. Cells connect horizontally and vertically, but not diagonally.",
      notes: ["The input grid may be empty."],
    },
    examples: [{ input: "grid = [[1,1,0],[0,1,0],[1,0,1]]", output: "3" }],
    constraints: ["0 ≤ rows, columns ≤ 300", "grid contains only 0 and 1"],
    starterCode: {
      javascript: `function countRegions(grid) {\n  // Count groups connected in four directions.\n}\n\nconsole.log(countRegions([[1,1,0],[0,1,0],[1,0,1]]));\nconsole.log(countRegions([]));`,
      python: `def countRegions(grid):\n    # Count groups connected in four directions.\n    pass\n\nprint(countRegions([[1,1,0],[0,1,0],[1,0,1]]))\nprint(countRegions([]))`,
      cpp: `#include <iostream>\n#include <vector>\nusing namespace std;\nint countRegions(vector<vector<int>> grid) {\n    // Count groups connected in four directions.\n    return 0;\n}\nint main() { cout << countRegions({{1,1,0},{0,1,0},{1,0,1}}) << endl << countRegions({}) << endl; }`,
    },
    expectedOutput: { javascript: "3\n0", python: "3\n0", cpp: "3\n0" },
  },

  "minimum-meeting-rooms": {
    id: "minimum-meeting-rooms",
    title: "Minimum Meeting Rooms",
    difficulty: "Medium",
    category: "Greedy • Scheduling",
    description: {
      text: "Given meeting intervals [start, end), return the fewest rooms needed so that no overlapping meetings share a room.",
      notes: ["A meeting ending at time t does not overlap one starting at time t."],
    },
    examples: [{ input: "meetings = [[0,30],[5,10],[15,20]]", output: "2" }, { input: "meetings = [[1,4],[4,7]]", output: "1" }],
    constraints: ["0 ≤ meetings.length ≤ 10⁵", "start < end for every meeting"],
    starterCode: {
      javascript: `function minimumRooms(meetings) {\n  // Return the maximum number of concurrent meetings.\n}\n\nconsole.log(minimumRooms([[0,30],[5,10],[15,20]]));\nconsole.log(minimumRooms([[1,4],[4,7]]));`,
      python: `def minimumRooms(meetings):\n    # Return the maximum number of concurrent meetings.\n    pass\n\nprint(minimumRooms([[0,30],[5,10],[15,20]]))\nprint(minimumRooms([[1,4],[4,7]]))`,
      cpp: `#include <iostream>\n#include <vector>\nusing namespace std;\nint minimumRooms(vector<vector<int>> meetings) {\n    // Return the maximum number of concurrent meetings.\n    return 0;\n}\nint main() { cout << minimumRooms({{0,30},{5,10},{15,20}}) << endl << minimumRooms({{1,4},{4,7}}) << endl; }`,
    },
    expectedOutput: { javascript: "2\n1", python: "2\n1", cpp: "2\n1" },
  },

  "subset-sum-exists": {
    id: "subset-sum-exists",
    title: "Subset Sum Exists",
    difficulty: "Medium",
    category: "Backtracking • Subsets",
    description: {
      text: "Determine whether some subset of the given non-negative integers adds up exactly to target. Each array element may be used at most once.",
      notes: ["The empty subset is allowed, so target 0 is always achievable."],
    },
    examples: [{ input: "nums = [3,6,8,10], target = 14", output: "true" }, { input: "nums = [2,5], target = 4", output: "false" }],
    constraints: ["0 ≤ nums.length ≤ 24", "0 ≤ nums[i], target ≤ 10⁴"],
    starterCode: {
      javascript: `function subsetSumExists(nums, target) {\n  // Return whether a subset totals target.\n}\n\nconsole.log(subsetSumExists([3,6,8,10], 14) ? "true" : "false");\nconsole.log(subsetSumExists([2,5], 4) ? "true" : "false");`,
      python: `def subsetSumExists(nums, target):\n    # Return whether a subset totals target.\n    pass\n\nprint(str(subsetSumExists([3,6,8,10], 14)).lower())\nprint(str(subsetSumExists([2,5], 4)).lower())`,
      cpp: `#include <iostream>\n#include <vector>\nusing namespace std;\nbool subsetSumExists(vector<int> nums, int target) {\n    // Return whether a subset totals target.\n    return false;\n}\nint main() { cout << (subsetSumExists({3,6,8,10},14) ? "true" : "false") << endl << (subsetSumExists({2,5},4) ? "true" : "false") << endl; }`,
    },
    expectedOutput: { javascript: "true\nfalse", python: "true\nfalse", cpp: "true\nfalse" },
  },

  "trie-prefix-check": {
    id: "trie-prefix-check",
    title: "Dictionary Prefix Check",
    difficulty: "Easy",
    category: "Trie • Prefix Search",
    description: {
      text: "Given a dictionary of lowercase words and a prefix, determine whether at least one word starts with that prefix.",
      notes: ["An empty prefix matches every non-empty dictionary."],
    },
    examples: [{ input: 'words = ["code","coffee","booth"], prefix = "co"', output: "true" }, { input: 'words = ["code","booth"], prefix = "cat"', output: "false" }],
    constraints: ["0 ≤ words.length ≤ 10⁴", "0 ≤ word and prefix length ≤ 100", "Words contain lowercase English letters"],
    starterCode: {
      javascript: `function hasPrefix(words, prefix) {\n  // Return whether any dictionary word starts with prefix.\n}\n\nconsole.log(hasPrefix(["code","coffee","booth"], "co") ? "true" : "false");\nconsole.log(hasPrefix(["code","booth"], "cat") ? "true" : "false");`,
      python: `def hasPrefix(words, prefix):\n    # Return whether any dictionary word starts with prefix.\n    pass\n\nprint(str(hasPrefix(["code","coffee","booth"], "co")).lower())\nprint(str(hasPrefix(["code","booth"], "cat")).lower())`,
      cpp: `#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\nbool hasPrefix(vector<string> words, string prefix) {\n    // Return whether any dictionary word starts with prefix.\n    return false;\n}\nint main() { cout << (hasPrefix({"code","coffee","booth"},"co") ? "true" : "false") << endl << (hasPrefix({"code","booth"},"cat") ? "true" : "false") << endl; }`,
    },
    expectedOutput: { javascript: "true\nfalse", python: "true\nfalse", cpp: "true\nfalse" },
  },

  "count-set-bits": {
    id: "count-set-bits",
    title: "Count Set Bits",
    difficulty: "Easy",
    category: "Bit Manipulation • Counting",
    description: {
      text: "For each non-negative integer, count the number of 1 bits in its binary representation and return the counts in input order.",
      notes: [],
    },
    examples: [{ input: "nums = [0,7,10,15]", output: "[0,3,2,4]" }],
    constraints: ["0 ≤ nums.length ≤ 10⁵", "0 ≤ nums[i] < 2³¹"],
    starterCode: {
      javascript: `function countSetBits(nums) {\n  // Return one population count per value.\n}\n\nconsole.log(JSON.stringify(countSetBits([0,7,10,15])));`,
      python: `def countSetBits(nums):\n    # Return one population count per value.\n    pass\n\nprint(countSetBits([0,7,10,15]))`,
      cpp: `#include <iostream>\n#include <vector>\nusing namespace std;\nvector<int> countSetBits(vector<int> nums) {\n    // Return one population count per value.\n    return {};\n}\nint main() { for (int x : countSetBits({0,7,10,15})) cout << x << " "; }`,
    },
    expectedOutput: { javascript: "[0,3,2,4]", python: "[0, 3, 2, 4]", cpp: "0 3 2 4 " },
  },

  "climbing-stairs": {
    id: "climbing-stairs",
    title: "Climbing Stairs",
    difficulty: "Easy",
    category: "Dynamic Programming • One Dimensional",
    description: {
      text: "A staircase has n steps. Each move climbs either one or two steps. Return the number of distinct ways to reach the top.",
      notes: ["The order of steps matters."],
    },
    examples: [{ input: "n = 5", output: "8" }, { input: "n = 1", output: "1" }],
    constraints: ["1 ≤ n ≤ 45"],
    starterCode: {
      javascript: `function climbingStairs(n) {\n  // Return the number of distinct ways to reach step n.\n}\n\nconsole.log(climbingStairs(5));\nconsole.log(climbingStairs(1));`,
      python: `def climbingStairs(n):\n    # Return the number of distinct ways to reach step n.\n    pass\n\nprint(climbingStairs(5))\nprint(climbingStairs(1))`,
      cpp: `#include <iostream>\nusing namespace std;\nlong long climbingStairs(int n) {\n    // Return the number of distinct ways to reach step n.\n    return 0;\n}\nint main() { cout << climbingStairs(5) << endl << climbingStairs(1) << endl; }`,
    },
    expectedOutput: { javascript: "8\n1", python: "8\n1", cpp: "8\n1" },
  },

  "minimum-coin-count": {
    id: "minimum-coin-count",
    title: "Minimum Coin Count",
    difficulty: "Medium",
    category: "Dynamic Programming • Coin Change",
    description: {
      text: "Given coin denominations and an amount, return the fewest coins needed to make that amount. Return -1 if it cannot be formed. Each denomination may be used any number of times.",
      notes: ["The amount 0 requires zero coins."],
    },
    examples: [{ input: "coins = [1,3,4], amount = 6", output: "2", explanation: "Two coins of value 3 make 6." }, { input: "coins = [2], amount = 3", output: "-1" }],
    constraints: ["1 ≤ coins.length ≤ 20", "1 ≤ coins[i] ≤ 10⁴", "0 ≤ amount ≤ 10⁴"],
    starterCode: {
      javascript: `function minimumCoinCount(coins, amount) {\n  // Return the minimum number of coins, or -1.\n}\n\nconsole.log(minimumCoinCount([1,3,4], 6));\nconsole.log(minimumCoinCount([2], 3));`,
      python: `def minimumCoinCount(coins, amount):\n    # Return the minimum number of coins, or -1.\n    pass\n\nprint(minimumCoinCount([1,3,4], 6))\nprint(minimumCoinCount([2], 3))`,
      cpp: `#include <iostream>\n#include <vector>\nusing namespace std;\nint minimumCoinCount(vector<int> coins, int amount) {\n    // Return the minimum number of coins, or -1.\n    return -1;\n}\nint main() { cout << minimumCoinCount({1,3,4},6) << endl << minimumCoinCount({2},3) << endl; }`,
    },
    expectedOutput: { javascript: "2\n-1", python: "2\n-1", cpp: "2\n-1" },
  },

  "edit-distance": {
    id: "edit-distance",
    title: "Edit Distance",
    difficulty: "Hard",
    category: "Dynamic Programming • Strings",
    description: {
      text: "Return the minimum number of single-character insertions, deletions, and substitutions needed to transform one string into another.",
      notes: ["An operation has cost 1."],
    },
    examples: [{ input: 'word1 = "kitten", word2 = "sitting"', output: "3" }, { input: 'word1 = "", word2 = "abc"', output: "3" }],
    constraints: ["0 ≤ word1.length, word2.length ≤ 500", "Strings contain lowercase English letters"],
    starterCode: {
      javascript: `function editDistance(word1, word2) {\n  // Return the minimum number of edits.\n}\n\nconsole.log(editDistance("kitten", "sitting"));\nconsole.log(editDistance("", "abc"));`,
      python: `def editDistance(word1, word2):\n    # Return the minimum number of edits.\n    pass\n\nprint(editDistance("kitten", "sitting"))\nprint(editDistance("", "abc"))`,
      cpp: `#include <iostream>\n#include <string>\nusing namespace std;\nint editDistance(string word1, string word2) {\n    // Return the minimum number of edits.\n    return 0;\n}\nint main() { cout << editDistance("kitten","sitting") << endl << editDistance("","abc") << endl; }`,
    },
    expectedOutput: { javascript: "3\n3", python: "3\n3", cpp: "3\n3" },
  },

  "move-zeroes": {
    id: "move-zeroes", title: "Move Zeroes", difficulty: "Easy", category: "Array • Two Pointers",
    description: { text: "Move every zero in an integer array to the end while preserving the relative order of nonzero values. Modify the array in place.", notes: [] },
    examples: [{ input: "nums = [0,1,0,3,12]", output: "[1,3,12,0,0]" }, { input: "nums = [0]", output: "[0]" }],
    constraints: ["1 ≤ nums.length ≤ 10⁴", "-2³¹ ≤ nums[i] ≤ 2³¹ - 1"],
    starterCode: {
      javascript: `function moveZeroes(nums) {\n  // Write your solution here\n}\nlet nums = [0, 1, 0, 3, 12];\nmoveZeroes(nums);\nconsole.log(JSON.stringify(nums));`,
      python: `def moveZeroes(nums):\n    # Write your solution here\n    pass\nnums = [0, 1, 0, 3, 12]\nmoveZeroes(nums)\nprint(nums)`,
      cpp: `#include <iostream>\n#include <vector>\nusing namespace std;\nclass Solution { public: void moveZeroes(vector<int>& nums) { /* Write your solution */ } };\nint main() { vector<int> nums={0,1,0,3,12}; Solution().moveZeroes(nums); for(int x:nums) cout<<x<<" "; cout<<endl; }`,
    },
    expectedOutput: { javascript: "[1,3,12,0,0]", python: "[1, 3, 12, 0, 0]", cpp: "1 3 12 0 0 " },
  },
  "valid-anagram": {
    id: "valid-anagram", title: "Valid Anagram", difficulty: "Easy", category: "String • Hash Table",
    description: { text: "Given two lowercase strings, determine whether one is an anagram of the other. An anagram uses every character the same number of times.", notes: [] },
    examples: [{ input: 's = "listen", t = "silent"', output: "true" }, { input: 's = "rat", t = "car"', output: "false" }],
    constraints: ["1 ≤ s.length, t.length ≤ 5 × 10⁴", "s and t contain lowercase English letters"],
    starterCode: {
      javascript: `function isAnagram(s, t) {\n  // Write your solution here\n}\nconsole.log(isAnagram("listen", "silent"));`,
      python: `def isAnagram(s, t):\n    # Write your solution here\n    pass\nprint(isAnagram("listen", "silent"))`,
      cpp: `#include <iostream>\n#include <string>\nusing namespace std;\nclass Solution { public: bool isAnagram(string s, string t) { /* Write your solution */ return false; } };\nint main() { cout << (Solution().isAnagram("listen", "silent") ? "true" : "false") << endl; }`,
    },
    expectedOutput: { javascript: "true", python: "True", cpp: "true" },
  },
  "binary-search": {
    id: "binary-search", title: "Binary Search", difficulty: "Easy", category: "Array • Binary Search",
    description: { text: "Given a sorted array of distinct integers and a target, return the target's index or -1 when it is absent. Aim for logarithmic time.", notes: [] },
    examples: [{ input: "nums = [-1,0,3,5,9,12], target = 9", output: "4" }, { input: "nums = [-1,0,3,5,9,12], target = 2", output: "-1" }],
    constraints: ["1 ≤ nums.length ≤ 10⁴", "All values in nums are distinct", "nums is sorted in ascending order"],
    starterCode: {
      javascript: `function search(nums, target) {\n  // Write your solution here\n}\nconsole.log(search([-1, 0, 3, 5, 9, 12], 9));`,
      python: `def search(nums, target):\n    # Write your solution here\n    pass\nprint(search([-1, 0, 3, 5, 9, 12], 9))`,
      cpp: `#include <iostream>\n#include <vector>\nusing namespace std;\nclass Solution { public: int search(vector<int>& nums, int target) { /* Write your solution */ return -1; } };\nint main() { vector<int> nums={-1,0,3,5,9,12}; cout << Solution().search(nums,9) << endl; }`,
    },
    expectedOutput: { javascript: "4", python: "4", cpp: "4" },
  },
  "best-time-stock": {
    id: "best-time-stock", title: "Best Time to Buy and Sell Stock", difficulty: "Easy", category: "Array • Greedy",
    description: { text: "Given daily stock prices, choose one day to buy and a later day to sell. Return the maximum possible profit, or zero if no profitable trade exists.", notes: [] },
    examples: [{ input: "prices = [7,1,5,3,6,4]", output: "5" }, { input: "prices = [7,6,4,3,1]", output: "0" }],
    constraints: ["1 ≤ prices.length ≤ 10⁵", "0 ≤ prices[i] ≤ 10⁴"],
    starterCode: {
      javascript: `function maxProfit(prices) {\n  // Write your solution here\n}\nconsole.log(maxProfit([7, 1, 5, 3, 6, 4]));`,
      python: `def maxProfit(prices):\n    # Write your solution here\n    pass\nprint(maxProfit([7, 1, 5, 3, 6, 4]))`,
      cpp: `#include <iostream>\n#include <vector>\nusing namespace std;\nclass Solution { public: int maxProfit(vector<int>& prices) { /* Write your solution */ return 0; } };\nint main() { vector<int> p={7,1,5,3,6,4}; cout << Solution().maxProfit(p) << endl; }`,
    },
    expectedOutput: { javascript: "5", python: "5", cpp: "5" },
  },
  "merge-sorted-lists": {
    id: "merge-sorted-lists", title: "Merge Two Sorted Lists", difficulty: "Easy", category: "Linked List • Two Pointers",
    description: { text: "Given two sorted integer arrays representing the values of two linked lists, return their values merged into one sorted sequence. Preserve duplicates.", notes: ["The array representation keeps the examples language-neutral; solve by advancing pointers through both sequences."] },
    examples: [{ input: "a = [1,2,4], b = [1,3,4]", output: "[1,1,2,3,4,4]" }, { input: "a = [], b = [0]", output: "[0]" }],
    constraints: ["0 ≤ a.length, b.length ≤ 50", "-100 ≤ values ≤ 100", "Both inputs are sorted in non-decreasing order"],
    starterCode: {
      javascript: `function mergeTwoLists(a, b) {\n  // Write your solution here\n}\nconsole.log(JSON.stringify(mergeTwoLists([1, 2, 4], [1, 3, 4])));`,
      python: `def mergeTwoLists(a, b):\n    # Write your solution here\n    pass\nprint(mergeTwoLists([1, 2, 4], [1, 3, 4]))`,
      cpp: `#include <iostream>\n#include <vector>\nusing namespace std;\nclass Solution { public: vector<int> mergeTwoLists(vector<int> a, vector<int> b) { /* Write your solution */ return {}; } };\nint main() { auto v=Solution().mergeTwoLists({1,2,4},{1,3,4}); for(int x:v) cout<<x<<" "; cout<<endl; }`,
    },
    expectedOutput: { javascript: "[1,1,2,3,4,4]", python: "[1, 1, 2, 3, 4, 4]", cpp: "1 1 2 3 4 4 " },
  },
  "linked-list-cycle": {
    id: "linked-list-cycle", title: "Linked List Cycle", difficulty: "Easy", category: "Linked List • Fast and Slow Pointers",
    description: { text: "A linked list is represented by its values and a cycle-entry index. Return whether following next pointers eventually revisits a node; -1 means the final node points to null.", notes: ["Use the cycle-entry index to construct or reason about the list; the index is not part of the node values."] },
    examples: [{ input: "values = [3,2,0,-4], pos = 1", output: "true" }, { input: "values = [1], pos = -1", output: "false" }],
    constraints: ["0 ≤ values.length ≤ 10⁴", "-10⁵ ≤ values[i] ≤ 10⁵", "pos is -1 or a valid node index"],
    starterCode: {
      javascript: `function hasCycle(values, pos) {\n  // Write your solution here\n}\nconsole.log(hasCycle([3, 2, 0, -4], 1));`,
      python: `def hasCycle(values, pos):\n    # Write your solution here\n    pass\nprint(hasCycle([3, 2, 0, -4], 1))`,
      cpp: `#include <iostream>\n#include <vector>\nusing namespace std;\nclass Solution { public: bool hasCycle(vector<int> values, int pos) { /* Write your solution */ return false; } };\nint main() { cout << (Solution().hasCycle({3,2,0,-4},1) ? "true" : "false") << endl; }`,
    },
    expectedOutput: { javascript: "true", python: "True", cpp: "true" },
  },
  "implement-queue-stacks": {
    id: "implement-queue-stacks", title: "Implement Queue Using Stacks", difficulty: "Easy", category: "Queue • Stack",
    description: { text: "Design a first-in-first-out queue using two stacks. Process the supplied operations and return the values produced by each peek or pop; push produces no output.", notes: [] },
    examples: [{ input: 'operations = ["push 1","push 2","peek","pop","empty"]', output: "[1,1,false]" }],
    constraints: ["At most 100 operations are provided", "Pop and peek are called only when the queue is non-empty"],
    starterCode: {
      javascript: `function runQueue(operations) {\n  // Write your solution here\n}\nconsole.log(JSON.stringify(runQueue(["push 1", "push 2", "peek", "pop", "empty"])));`,
      python: `def runQueue(operations):\n    # Write your solution here\n    pass\nprint(runQueue(["push 1", "push 2", "peek", "pop", "empty"]))`,
      cpp: `#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\nclass Solution { public: vector<string> runQueue(vector<string> operations) { /* Write your solution */ return {}; } };\nint main() { auto r=Solution().runQueue({"push 1","push 2","peek","pop","empty"}); for(auto s:r) cout<<s<<" "; cout<<endl; }`,
    },
    expectedOutput: { javascript: "[1,1,false]", python: "[1, 1, False]", cpp: "1 1 false " },
  },
  "invert-binary-tree": {
    id: "invert-binary-tree", title: "Invert Binary Tree", difficulty: "Easy", category: "Tree • Depth First Search",
    description: { text: "Given a binary tree in level-order array form, swap the left and right child of every node and return the resulting level-order values, omitting trailing nulls.", notes: ["Use null for a missing child."] },
    examples: [{ input: "root = [4,2,7,1,3,6,9]", output: "[4,7,2,9,6,3,1]" }, { input: "root = []", output: "[]" }],
    constraints: ["0 ≤ number of nodes ≤ 100", "-100 ≤ node value ≤ 100"],
    starterCode: {
      javascript: `function invertTree(levelOrder) {\n  // Write your solution here\n}\nconsole.log(JSON.stringify(invertTree([4, 2, 7, 1, 3, 6, 9])));`,
      python: `def invertTree(levelOrder):\n    # Write your solution here\n    pass\nprint(invertTree([4, 2, 7, 1, 3, 6, 9]))`,
      cpp: `#include <iostream>\n#include <vector>\nusing namespace std;\nclass Solution { public: vector<int> invertTree(vector<int> levelOrder) { /* Write your solution */ return {}; } };\nint main() { auto r=Solution().invertTree({4,2,7,1,3,6,9}); for(int x:r) cout<<x<<" "; cout<<endl; }`,
    },
    expectedOutput: { javascript: "[4,7,2,9,6,3,1]", python: "[4, 7, 2, 9, 6, 3, 1]", cpp: "4 7 2 9 6 3 1 " },
  },
  "group-anagrams": {
    id: "group-anagrams", title: "Group Anagrams", difficulty: "Medium", category: "String • Hash Table",
    description: { text: "Group words that contain the same letters with the same frequencies. Return the groups in any order; words within a group may also be in any order.", notes: [] },
    examples: [{ input: 'strs = ["eat","tea","tan","ate","nat","bat"]', output: '[["eat","tea","ate"],["tan","nat"],["bat"]]' }, { input: 'strs = [""]', output: '[[""]]' }],
    constraints: ["1 ≤ strs.length ≤ 10⁴", "0 ≤ strs[i].length ≤ 100", "strs[i] contains lowercase English letters"],
    starterCode: {
      javascript: `function groupAnagrams(strs) {\n  // Write your solution here\n}\nconsole.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]).length);`,
      python: `def groupAnagrams(strs):\n    # Write your solution here\n    pass\nprint(len(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"])))`,
      cpp: `#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\nclass Solution { public: vector<vector<string>> groupAnagrams(vector<string> strs) { /* Write your solution */ return {}; } };\nint main() { cout << Solution().groupAnagrams({"eat","tea","tan","ate","nat","bat"}).size() << endl; }`,
    },
    expectedOutput: { javascript: "3", python: "3", cpp: "3" },
  },
  "product-except-self": {
    id: "product-except-self", title: "Product of Array Except Self", difficulty: "Medium", category: "Array • Prefix Sum",
    description: { text: "For each index, return the product of every other array value. Do not use division and target O(n) time.", notes: ["The product of any prefix or suffix fits in a 32-bit integer."] },
    examples: [{ input: "nums = [1,2,3,4]", output: "[24,12,8,6]" }, { input: "nums = [-1,1,0,-3,3]", output: "[0,0,9,0,0]" }],
    constraints: ["2 ≤ nums.length ≤ 10⁵", "-30 ≤ nums[i] ≤ 30"],
    starterCode: {
      javascript: `function productExceptSelf(nums) {\n  // Write your solution here\n}\nconsole.log(JSON.stringify(productExceptSelf([1, 2, 3, 4])));`,
      python: `def productExceptSelf(nums):\n    # Write your solution here\n    pass\nprint(productExceptSelf([1, 2, 3, 4]))`,
      cpp: `#include <iostream>\n#include <vector>\nusing namespace std;\nclass Solution { public: vector<int> productExceptSelf(vector<int>& nums) { /* Write your solution */ return {}; } };\nint main() { vector<int> n={1,2,3,4}; for(int x:Solution().productExceptSelf(n)) cout<<x<<" "; cout<<endl; }`,
    },
    expectedOutput: { javascript: "[24,12,8,6]", python: "[24, 12, 8, 6]", cpp: "24 12 8 6 " },
  },
  "longest-consecutive-sequence": {
    id: "longest-consecutive-sequence", title: "Longest Consecutive Sequence", difficulty: "Medium", category: "Array • Hash Table",
    description: { text: "Return the length of the longest run of consecutive integer values in an unsorted array. The values need not be adjacent in the input.", notes: ["Aim for O(n) time."] },
    examples: [{ input: "nums = [100,4,200,1,3,2]", output: "4" }, { input: "nums = [0,3,7,2,5,8,4,6,0,1]", output: "9" }],
    constraints: ["0 ≤ nums.length ≤ 10⁵", "-10⁹ ≤ nums[i] ≤ 10⁹"],
    starterCode: {
      javascript: `function longestConsecutive(nums) {\n  // Write your solution here\n}\nconsole.log(longestConsecutive([100, 4, 200, 1, 3, 2]));`,
      python: `def longestConsecutive(nums):\n    # Write your solution here\n    pass\nprint(longestConsecutive([100, 4, 200, 1, 3, 2]))`,
      cpp: `#include <iostream>\n#include <vector>\nusing namespace std;\nclass Solution { public: int longestConsecutive(vector<int>& nums) { /* Write your solution */ return 0; } };\nint main() { vector<int> n={100,4,200,1,3,2}; cout<<Solution().longestConsecutive(n)<<endl; }`,
    },
    expectedOutput: { javascript: "4", python: "4", cpp: "4" },
  },
  "three-sum": {
    id: "three-sum", title: "3Sum", difficulty: "Medium", category: "Array • Two Pointers",
    description: { text: "Return all unique triples of distinct indices whose values sum to zero. Do not return duplicate value triples.", notes: [] },
    examples: [{ input: "nums = [-1,0,1,2,-1,-4]", output: "[[-1,-1,2],[-1,0,1]]" }, { input: "nums = [0,1,1]", output: "[]" }],
    constraints: ["3 ≤ nums.length ≤ 3000", "-10⁵ ≤ nums[i] ≤ 10⁵"],
    starterCode: {
      javascript: `function threeSum(nums) {\n  // Write your solution here\n}\nconsole.log(threeSum([-1, 0, 1, 2, -1, -4]).length);`,
      python: `def threeSum(nums):\n    # Write your solution here\n    pass\nprint(len(threeSum([-1, 0, 1, 2, -1, -4])))`,
      cpp: `#include <iostream>\n#include <vector>\nusing namespace std;\nclass Solution { public: vector<vector<int>> threeSum(vector<int>& nums) { /* Write your solution */ return {}; } };\nint main() { vector<int> n={-1,0,1,2,-1,-4}; cout<<Solution().threeSum(n).size()<<endl; }`,
    },
    expectedOutput: { javascript: "2", python: "2", cpp: "2" },
  },
  "search-rotated-array": {
    id: "search-rotated-array", title: "Search in Rotated Sorted Array", difficulty: "Medium", category: "Array • Binary Search",
    description: { text: "A strictly increasing array was rotated at an unknown pivot. Return the index of target, or -1 if it does not occur, in O(log n) time.", notes: [] },
    examples: [{ input: "nums = [4,5,6,7,0,1,2], target = 0", output: "4" }, { input: "nums = [4,5,6,7,0,1,2], target = 3", output: "-1" }],
    constraints: ["1 ≤ nums.length ≤ 5000", "All values are distinct", "-10⁴ ≤ nums[i], target ≤ 10⁴"],
    starterCode: {
      javascript: `function searchRotated(nums, target) {\n  // Write your solution here\n}\nconsole.log(searchRotated([4, 5, 6, 7, 0, 1, 2], 0));`,
      python: `def searchRotated(nums, target):\n    # Write your solution here\n    pass\nprint(searchRotated([4, 5, 6, 7, 0, 1, 2], 0))`,
      cpp: `#include <iostream>\n#include <vector>\nusing namespace std;\nclass Solution { public: int search(vector<int>& nums, int target) { /* Write your solution */ return -1; } };\nint main() { vector<int> n={4,5,6,7,0,1,2}; cout<<Solution().search(n,0)<<endl; }`,
    },
    expectedOutput: { javascript: "4", python: "4", cpp: "4" },
  },
  "remove-nth-from-end": {
    id: "remove-nth-from-end", title: "Remove Nth Node From End", difficulty: "Medium", category: "Linked List • Two Pointers",
    description: { text: "Given a list as an array and an integer n, remove the nth value from the end and return the remaining values in order.", notes: ["n is always valid for the supplied list."] },
    examples: [{ input: "values = [1,2,3,4,5], n = 2", output: "[1,2,3,5]" }, { input: "values = [1], n = 1", output: "[]" }],
    constraints: ["1 ≤ values.length ≤ 30", "1 ≤ n ≤ values.length", "0 ≤ values[i] ≤ 100"],
    starterCode: {
      javascript: `function removeNthFromEnd(values, n) {\n  // Write your solution here\n}\nconsole.log(JSON.stringify(removeNthFromEnd([1, 2, 3, 4, 5], 2)));`,
      python: `def removeNthFromEnd(values, n):\n    # Write your solution here\n    pass\nprint(removeNthFromEnd([1, 2, 3, 4, 5], 2))`,
      cpp: `#include <iostream>\n#include <vector>\nusing namespace std;\nclass Solution { public: vector<int> removeNthFromEnd(vector<int> values, int n) { /* Write your solution */ return {}; } };\nint main() { auto r=Solution().removeNthFromEnd({1,2,3,4,5},2); for(int x:r) cout<<x<<" "; cout<<endl; }`,
    },
    expectedOutput: { javascript: "[1,2,3,5]", python: "[1, 2, 3, 5]", cpp: "1 2 3 5 " },
  },
  "daily-temperatures": {
    id: "daily-temperatures", title: "Daily Temperatures", difficulty: "Medium", category: "Stack • Monotonic Stack",
    description: { text: "For each day, return how many days must pass until a warmer temperature. If no warmer day exists, return zero for that day.", notes: [] },
    examples: [{ input: "temperatures = [73,74,75,71,69,72,76,73]", output: "[1,1,4,2,1,1,0,0]" }, { input: "temperatures = [30,40,50,60]", output: "[1,1,1,0]" }],
    constraints: ["1 ≤ temperatures.length ≤ 10⁵", "30 ≤ temperatures[i] ≤ 100"],
    starterCode: {
      javascript: `function dailyTemperatures(temperatures) {\n  // Write your solution here\n}\nconsole.log(JSON.stringify(dailyTemperatures([73, 74, 75, 71, 69, 72, 76, 73])));`,
      python: `def dailyTemperatures(temperatures):\n    # Write your solution here\n    pass\nprint(dailyTemperatures([73, 74, 75, 71, 69, 72, 76, 73]))`,
      cpp: `#include <iostream>\n#include <vector>\nusing namespace std;\nclass Solution { public: vector<int> dailyTemperatures(vector<int>& t) { /* Write your solution */ return {}; } };\nint main() { vector<int> t={73,74,75,71,69,72,76,73}; for(int x:Solution().dailyTemperatures(t)) cout<<x<<" "; cout<<endl; }`,
    },
    expectedOutput: { javascript: "[1,1,4,2,1,1,0,0]", python: "[1, 1, 4, 2, 1, 1, 0, 0]", cpp: "1 1 4 2 1 1 0 0 " },
  },
  "validate-bst": {
    id: "validate-bst", title: "Validate Binary Search Tree", difficulty: "Medium", category: "Tree • Binary Search Tree",
    description: { text: "Given a binary tree in level-order array form, determine whether it is a valid BST: every left descendant is strictly smaller and every right descendant is strictly larger than each node.", notes: ["Use null for missing children. In the C++ starter, LLONG_MIN represents a missing child; valid node values fit in a signed 32-bit integer."] },
    examples: [{ input: "root = [2,1,3]", output: "true" }, { input: "root = [5,1,4,null,null,3,6]", output: "false" }],
    constraints: ["1 ≤ number of nodes ≤ 10⁴", "-2³¹ ≤ node value ≤ 2³¹ - 1"],
    starterCode: {
      javascript: `function isValidBST(levelOrder) {\n  // Write your solution here\n}\nconsole.log(isValidBST([2, 1, 3]));`,
      python: `def isValidBST(levelOrder):\n    # Write your solution here\n    pass\nprint(isValidBST([2, 1, 3]))`,
      cpp: `#include <iostream>\n#include <limits>\n#include <vector>\nusing namespace std;\nclass Solution { public: bool isValidBST(vector<long long> levelOrder) { /* Write your solution */ return false; } };\nint main() { long long nil=numeric_limits<long long>::min(); cout<<(Solution().isValidBST({5,1,4,nil,nil,3,6}) ? "true" : "false")<<endl; }`,
    },
    expectedOutput: { javascript: "true", python: "True", cpp: "true" },
  },
  "binary-tree-level-order": {
    id: "binary-tree-level-order", title: "Binary Tree Level Order Traversal", difficulty: "Medium", category: "Tree • Breadth First Search",
    description: { text: "Return the values of a binary tree grouped by depth from top to bottom. The input tree is given in level-order array form with null for missing children.", notes: ["In the C++ starter, -1001 represents a missing child; node values are between -1000 and 1000."] },
    examples: [{ input: "root = [3,9,20,null,null,15,7]", output: "[[3],[9,20],[15,7]]" }, { input: "root = [1]", output: "[[1]]" }],
    constraints: ["0 ≤ number of nodes ≤ 2000", "-1000 ≤ node value ≤ 1000"],
    starterCode: {
      javascript: `function levelOrder(levelOrderInput) {\n  // Write your solution here\n}\nconsole.log(levelOrder([3, 9, 20, null, null, 15, 7]).length);`,
      python: `def levelOrder(levelOrderInput):\n    # Write your solution here\n    pass\nprint(len(levelOrder([3, 9, 20, None, None, 15, 7])))`,
      cpp: `#include <iostream>\n#include <vector>\nusing namespace std;\nclass Solution { public: vector<vector<int>> levelOrder(vector<int> input) { /* Write your solution */ return {}; } };\nint main() { cout<<Solution().levelOrder({3,9,20,-1001,-1001,15,7}).size()<<endl; }`,
    },
    expectedOutput: { javascript: "3", python: "3", cpp: "3" },
  },
  "top-k-frequent": {
    id: "top-k-frequent", title: "Top K Frequent Elements", difficulty: "Medium", category: "Array • Heap",
    description: { text: "Return the k values that occur most often in an integer array. The answer may be returned in any order; the test data has no tie at the cutoff.", notes: [] },
    examples: [{ input: "nums = [1,1,1,2,2,3], k = 2", output: "[1,2]" }, { input: "nums = [1], k = 1", output: "[1]" }],
    constraints: ["1 ≤ nums.length ≤ 10⁵", "k is between 1 and the number of unique values", "-10⁴ ≤ nums[i] ≤ 10⁴"],
    starterCode: {
      javascript: `function topKFrequent(nums, k) {\n  // Write your solution here\n}\nconsole.log(JSON.stringify(topKFrequent([1, 1, 1, 2, 2, 3], 2).sort((a, b) => a - b)));`,
      python: `def topKFrequent(nums, k):\n    # Write your solution here\n    pass\nprint(sorted(topKFrequent([1, 1, 1, 2, 2, 3], 2)))`,
      cpp: `#include <algorithm>\n#include <iostream>\n#include <vector>\nusing namespace std;\nclass Solution { public: vector<int> topKFrequent(vector<int>& nums, int k) { /* Write your solution */ return {}; } };\nint main() { vector<int> n={1,1,1,2,2,3}; auto result=Solution().topKFrequent(n,2); sort(result.begin(),result.end()); for(int x:result) cout<<x<<" "; cout<<endl; }`,
    },
    expectedOutput: { javascript: "[1,2]", python: "[1, 2]", cpp: "1 2 " },
  },
  "course-schedule": {
    id: "course-schedule", title: "Course Schedule", difficulty: "Medium", category: "Graph • Topological Sort",
    description: { text: "There are numCourses courses and prerequisite pairs [course, prerequisite]. Return whether it is possible to finish every course.", notes: ["Prerequisite pairs form a directed graph."] },
    examples: [{ input: "numCourses = 2, prerequisites = [[1,0]]", output: "true" }, { input: "numCourses = 2, prerequisites = [[1,0],[0,1]]", output: "false" }],
    constraints: ["1 ≤ numCourses ≤ 2000", "0 ≤ prerequisites.length ≤ 5000", "Each pair contains distinct valid course indices"],
    starterCode: {
      javascript: `function canFinish(numCourses, prerequisites) {\n  // Write your solution here\n}\nconsole.log(canFinish(2, [[1, 0]]));`,
      python: `def canFinish(numCourses, prerequisites):\n    # Write your solution here\n    pass\nprint(canFinish(2, [[1, 0]]))`,
      cpp: `#include <iostream>\n#include <vector>\nusing namespace std;\nclass Solution { public: bool canFinish(int n, vector<vector<int>>& p) { /* Write your solution */ return false; } };\nint main() { vector<vector<int>> p={{1,0}}; cout<<(Solution().canFinish(2,p)?"true":"false")<<endl; }`,
    },
    expectedOutput: { javascript: "true", python: "True", cpp: "true" },
  },
  "subsets": {
    id: "subsets", title: "Subsets", difficulty: "Medium", category: "Array • Backtracking",
    description: { text: "Return every subset of an array of distinct integers. The result may be in any order, and each subset may list its values in any order.", notes: [] },
    examples: [{ input: "nums = [1,2,3]", output: "[[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]]" }, { input: "nums = [0]", output: "[[],[0]]" }],
    constraints: ["1 ≤ nums.length ≤ 10", "-10 ≤ nums[i] ≤ 10", "All values are distinct"],
    starterCode: {
      javascript: `function subsets(nums) {\n  // Write your solution here\n}\nconsole.log(subsets([1, 2, 3]).length);`,
      python: `def subsets(nums):\n    # Write your solution here\n    pass\nprint(len(subsets([1, 2, 3])))`,
      cpp: `#include <iostream>\n#include <vector>\nusing namespace std;\nclass Solution { public: vector<vector<int>> subsets(vector<int>& nums) { /* Write your solution */ return {}; } };\nint main() { vector<int> n={1,2,3}; cout<<Solution().subsets(n).size()<<endl; }`,
    },
    expectedOutput: { javascript: "8", python: "8", cpp: "8" },
  },
  "house-robber": {
    id: "house-robber", title: "House Robber", difficulty: "Medium", category: "Dynamic Programming • One Dimensional",
    description: { text: "Each array value is the amount of money in a house along a street. Return the largest amount you can take without robbing adjacent houses.", notes: [] },
    examples: [{ input: "nums = [1,2,3,1]", output: "4" }, { input: "nums = [2,7,9,3,1]", output: "12" }],
    constraints: ["1 ≤ nums.length ≤ 100", "0 ≤ nums[i] ≤ 400"],
    starterCode: {
      javascript: `function rob(nums) {\n  // Write your solution here\n}\nconsole.log(rob([1, 2, 3, 1]));`,
      python: `def rob(nums):\n    # Write your solution here\n    pass\nprint(rob([1, 2, 3, 1]))`,
      cpp: `#include <iostream>\n#include <vector>\nusing namespace std;\nclass Solution { public: int rob(vector<int>& nums) { /* Write your solution */ return 0; } };\nint main() { vector<int> n={1,2,3,1}; cout<<Solution().rob(n)<<endl; }`,
    },
    expectedOutput: { javascript: "4", python: "4", cpp: "4" },
  },
  "decode-string": {
    id: "decode-string", title: "Decode String", difficulty: "Medium", category: "String • Stack",
    description: { text: "Decode an encoded string where k[segment] means segment repeated k times. Encodings can be nested; letters are never digits.", notes: [] },
    examples: [{ input: 's = "3[a]2[bc]"', output: '"aaabcbc"' }, { input: 's = "3[a2[c]]"', output: '"accaccacc"' }],
    constraints: ["1 ≤ s.length ≤ 30", "s contains lowercase letters, digits, and square brackets", "The decoded string length is at most 10⁵"],
    starterCode: {
      javascript: `function decodeString(s) {\n  // Write your solution here\n}\nconsole.log(decodeString("3[a]2[bc]"));`,
      python: `def decodeString(s):\n    # Write your solution here\n    pass\nprint(decodeString("3[a]2[bc]"))`,
      cpp: `#include <iostream>\n#include <string>\nusing namespace std;\nclass Solution { public: string decodeString(string s) { /* Write your solution */ return ""; } };\nint main() { cout<<Solution().decodeString("3[a]2[bc]")<<endl; }`,
    },
    expectedOutput: { javascript: "aaabcbc", python: "aaabcbc", cpp: "aaabcbc" },
  },
  "lru-cache": {
    id: "lru-cache", title: "LRU Cache", difficulty: "Medium", category: "Hash Table • Doubly Linked List",
    description: { text: "Design a least-recently-used cache with a positive capacity. get returns the value or -1; put inserts or updates a key. Evict the least recently used key when full.", notes: ["A get or put makes its key the most recently used."] },
    examples: [{ input: "capacity = 2; put(1,1), put(2,2), get(1), put(3,3), get(2)", output: "[1,-1]" }],
    constraints: ["1 ≤ capacity ≤ 3000", "0 ≤ key, value ≤ 10⁴", "At most 2 × 10⁵ operations"],
    starterCode: {
      javascript: `class LRUCache {\n  constructor(capacity) { /* Initialize your cache */ }\n  get(key) { /* Write your solution */ }\n  put(key, value) { /* Write your solution */ }\n}\nconst cache = new LRUCache(2); cache.put(1, 1); cache.put(2, 2); console.log(cache.get(1));`,
      python: `class LRUCache:\n    def __init__(self, capacity):\n        # Initialize your cache\n        pass\n    def get(self, key):\n        # Write your solution\n        pass\n    def put(self, key, value):\n        # Write your solution\n        pass\ncache = LRUCache(2)\ncache.put(1, 1)\ncache.put(2, 2)\nprint(cache.get(1))`,
      cpp: `#include <iostream>\nusing namespace std;\nclass LRUCache { public: LRUCache(int capacity) {} int get(int key) { return -1; } void put(int key,int value) {} };\nint main() { LRUCache c(2); c.put(1,1); c.put(2,2); cout<<c.get(1)<<endl; }`,
    },
    expectedOutput: { javascript: "1", python: "1", cpp: "1" },
  },
  "minimum-window-substring": {
    id: "minimum-window-substring", title: "Minimum Window Substring", difficulty: "Hard", category: "String • Sliding Window",
    description: { text: "Given strings s and t, return the shortest substring of s containing every character of t with the required multiplicity. Return an empty string if no such window exists.", notes: ["If multiple minimum windows exist, return any one."] },
    examples: [{ input: 's = "ADOBECODEBANC", t = "ABC"', output: '"BANC"' }, { input: 's = "a", t = "aa"', output: '""' }],
    constraints: ["1 ≤ s.length, t.length ≤ 10⁵", "s and t contain uppercase and lowercase English letters"],
    starterCode: {
      javascript: `function minWindow(s, t) {\n  // Write your solution here\n}\nconsole.log(minWindow("ADOBECODEBANC", "ABC"));`,
      python: `def minWindow(s, t):\n    # Write your solution here\n    pass\nprint(minWindow("ADOBECODEBANC", "ABC"))`,
      cpp: `#include <iostream>\n#include <string>\nusing namespace std;\nclass Solution { public: string minWindow(string s,string t) { /* Write your solution */ return ""; } };\nint main() { cout<<Solution().minWindow("ADOBECODEBANC","ABC")<<endl; }`,
    },
    expectedOutput: { javascript: "BANC", python: "BANC", cpp: "BANC" },
  },
  "median-two-sorted-arrays": {
    id: "median-two-sorted-arrays", title: "Median of Two Sorted Arrays", difficulty: "Hard", category: "Array • Binary Search",
    description: { text: "Given two sorted arrays, return the median of the combined sorted values. Your algorithm should run in O(log(m+n)) time.", notes: ["The combined length is at least one."] },
    examples: [{ input: "a = [1,3], b = [2]", output: "2.0" }, { input: "a = [1,2], b = [3,4]", output: "2.5" }],
    constraints: ["0 ≤ a.length, b.length ≤ 1000", "1 ≤ a.length + b.length ≤ 2000", "-10⁶ ≤ values ≤ 10⁶"],
    starterCode: {
      javascript: `function findMedianSortedArrays(a, b) {\n  // Write your solution here\n}\nconsole.log(findMedianSortedArrays([1, 3], [2]));`,
      python: `def findMedianSortedArrays(a, b):\n    # Write your solution here\n    pass\nprint(findMedianSortedArrays([1, 3], [2]))`,
      cpp: `#include <iostream>\n#include <vector>\nusing namespace std;\nclass Solution { public: double findMedianSortedArrays(vector<int>& a, vector<int>& b) { /* Write your solution */ return 0.0; } };\nint main() { vector<int> a={1,3},b={2}; cout<<Solution().findMedianSortedArrays(a,b)<<endl; }`,
    },
    expectedOutput: { javascript: "2", python: "2.0", cpp: "2" },
  },
  "binary-tree-max-path-sum": {
    id: "binary-tree-max-path-sum", title: "Binary Tree Maximum Path Sum", difficulty: "Hard", category: "Tree • Depth First Search",
    description: { text: "Given a non-empty binary tree in level-order array form, return the largest sum of values along any path. A path may start and end at any nodes but cannot revisit a node.", notes: ["Use null for missing children. In the C++ starter, -1001 represents a missing child; node values are between -1000 and 1000."] },
    examples: [{ input: "root = [1,2,3]", output: "6" }, { input: "root = [-10,9,20,null,null,15,7]", output: "42" }],
    constraints: ["1 ≤ number of nodes ≤ 3 × 10⁴", "-1000 ≤ node value ≤ 1000"],
    starterCode: {
      javascript: `function maxPathSum(levelOrder) {\n  // Write your solution here\n}\nconsole.log(maxPathSum([-10, 9, 20, null, null, 15, 7]));`,
      python: `def maxPathSum(levelOrder):\n    # Write your solution here\n    pass\nprint(maxPathSum([-10, 9, 20, None, None, 15, 7]))`,
      cpp: `#include <iostream>\n#include <vector>\nusing namespace std;\nclass Solution { public: int maxPathSum(vector<int> levelOrder) { /* Write your solution */ return 0; } };\nint main() { cout<<Solution().maxPathSum({-10,9,20,-1001,-1001,15,7})<<endl; }`,
    },
    expectedOutput: { javascript: "42", python: "42", cpp: "42" },
  },
  "word-ladder-length": {
    id: "word-ladder-length", title: "Word Ladder Length", difficulty: "Hard", category: "Graph • Breadth First Search",
    description: { text: "Return the number of words in a shortest transformation from beginWord to endWord, changing one lowercase letter at a time. Every intermediate word must be in wordList; return zero if no transformation exists.", notes: [] },
    examples: [{ input: 'beginWord = "hit", endWord = "cog", wordList = ["hot","dot","dog","lot","log","cog"]', output: "5" }, { input: 'beginWord = "hit", endWord = "cog", wordList = ["hot","dot","dog","lot","log"]', output: "0" }],
    constraints: ["1 ≤ beginWord.length ≤ 10", "endWord.length equals beginWord.length", "1 ≤ wordList.length ≤ 5000", "Words contain lowercase English letters"],
    starterCode: {
      javascript: `function ladderLength(beginWord, endWord, wordList) {\n  // Write your solution here\n}\nconsole.log(ladderLength("hit", "cog", ["hot", "dot", "dog", "lot", "log", "cog"]));`,
      python: `def ladderLength(beginWord, endWord, wordList):\n    # Write your solution here\n    pass\nprint(ladderLength("hit", "cog", ["hot", "dot", "dog", "lot", "log", "cog"]))`,
      cpp: `#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\nclass Solution { public: int ladderLength(string beginWord,string endWord,vector<string>& words) { /* Write your solution */ return 0; } };\nint main() { vector<string> w={"hot","dot","dog","lot","log","cog"}; cout<<Solution().ladderLength("hit","cog",w)<<endl; }`,
    },
    expectedOutput: { javascript: "5", python: "5", cpp: "5" },
  },
  "majority-element": {
    id: "majority-element", title: "Majority Element", difficulty: "Easy", category: "Array • Hash Table",
    description: { text: "Given an array, return the value that occurs more than half the time. The input is guaranteed to contain such a value.", notes: ["Try to solve it in linear time and constant extra space."] },
    examples: [{ input: "nums = [3,2,3]", output: "3" }, { input: "nums = [2,2,1,1,1,2,2]", output: "2" }],
    constraints: ["1 ≤ nums.length ≤ 5 × 10⁴", "-10⁹ ≤ nums[i] ≤ 10⁹", "A majority element always exists"],
    starterCode: {
      javascript: `function majorityElement(nums) {\n  // Write your solution here\n}\nconsole.log(majorityElement([3, 2, 3]));`,
      python: `def majorityElement(nums):\n    # Write your solution here\n    pass\nprint(majorityElement([3, 2, 3]))`,
      cpp: `#include <iostream>\n#include <vector>\nusing namespace std;\nclass Solution { public: int majorityElement(vector<int>& nums) { /* Write your solution */ return 0; } };\nint main() { vector<int> n={3,2,3}; cout<<Solution().majorityElement(n)<<endl; }`,
    },
    expectedOutput: { javascript: "3", python: "3", cpp: "3" },
  },
  "flood-fill": {
    id: "flood-fill", title: "Flood Fill", difficulty: "Easy", category: "Graph • Depth First Search",
    description: { text: "Starting at a cell, replace its color and the color of every 4-directionally connected cell with the same original color. Return the updated image.", notes: ["If the starting cell already has the new color, leave the image unchanged."] },
    examples: [{ input: "image = [[1,1,1],[1,1,0],[1,0,1]], sr = 1, sc = 1, color = 2", output: "[[2,2,2],[2,2,0],[2,0,1]]" }, { input: "image = [[0,0],[0,0]], sr = 0, sc = 0, color = 0", output: "[[0,0],[0,0]]" }],
    constraints: ["1 ≤ rows, columns ≤ 50", "0 ≤ image[r][c], color < 2³¹", "sr and sc identify a valid cell"],
    starterCode: {
      javascript: `function floodFill(image, sr, sc, color) {\n  // Write your solution here\n}\nconsole.log(JSON.stringify(floodFill([[1, 1, 1], [1, 1, 0], [1, 0, 1]], 1, 1, 2)));`,
      python: `def floodFill(image, sr, sc, color):\n    # Write your solution here\n    pass\nprint(floodFill([[1, 1, 1], [1, 1, 0], [1, 0, 1]], 1, 1, 2))`,
      cpp: `#include <iostream>\n#include <vector>\nusing namespace std;\nclass Solution { public: vector<vector<int>> floodFill(vector<vector<int>>& image,int sr,int sc,int color) { /* Write your solution */ return image; } };\nint main() { vector<vector<int>> a={{1,1,1},{1,1,0},{1,0,1}}; auto r=Solution().floodFill(a,1,1,2); for(auto row:r){for(int x:row) cout<<x; cout<<" ";} cout<<endl; }`,
    },
    expectedOutput: { javascript: "[[2,2,2],[2,2,0],[2,0,1]]", python: "[[2, 2, 2], [2, 2, 0], [2, 0, 1]]", cpp: "222 220 201 " },
  },
  "merge-intervals": {
    id: "merge-intervals", title: "Merge Intervals", difficulty: "Medium", category: "Intervals • Sorting",
    description: { text: "Given intervals, combine every pair that overlaps and return the resulting non-overlapping intervals in order. Intervals that only touch at an endpoint overlap.", notes: [] },
    examples: [{ input: "intervals = [[1,3],[2,6],[8,10],[15,18]]", output: "[[1,6],[8,10],[15,18]]" }, { input: "intervals = [[1,4],[4,5]]", output: "[[1,5]]" }],
    constraints: ["1 ≤ intervals.length ≤ 10⁴", "intervals[i].length = 2", "0 ≤ start ≤ end ≤ 10⁴"],
    starterCode: {
      javascript: `function mergeIntervals(intervals) {\n  // Write your solution here\n}\nconsole.log(mergeIntervals([[1, 3], [2, 6], [8, 10], [15, 18]]).length);`,
      python: `def mergeIntervals(intervals):\n    # Write your solution here\n    pass\nprint(len(mergeIntervals([[1, 3], [2, 6], [8, 10], [15, 18]])))`,
      cpp: `#include <iostream>\n#include <vector>\nusing namespace std;\nclass Solution { public: vector<vector<int>> merge(vector<vector<int>>& intervals) { /* Write your solution */ return {}; } };\nint main() { vector<vector<int>> a={{1,3},{2,6},{8,10},{15,18}}; cout<<Solution().merge(a).size()<<endl; }`,
    },
    expectedOutput: { javascript: "3", python: "3", cpp: "3" },
  },
  "k-closest-points": {
    id: "k-closest-points", title: "K Closest Points to Origin", difficulty: "Medium", category: "Heap • Priority Queue",
    description: { text: "Return the k points with the smallest squared Euclidean distance to the origin. The answer may be in any order.", notes: ["The squared distance of [x,y] is x² + y²."] },
    examples: [{ input: "points = [[1,3],[-2,2]], k = 1", output: "[[-2,2]]" }, { input: "points = [[3,3],[5,-1],[-2,4]], k = 2", output: "[[3,3],[-2,4]]" }],
    constraints: ["1 ≤ k ≤ points.length ≤ 10⁴", "-10⁴ ≤ x, y ≤ 10⁴", "The kth distance is unambiguous"],
    starterCode: {
      javascript: `function kClosest(points, k) {\n  // Write your solution here\n}\nconsole.log(kClosest([[1, 3], [-2, 2]], 1).length);`,
      python: `def kClosest(points, k):\n    # Write your solution here\n    pass\nprint(len(kClosest([[1, 3], [-2, 2]], 1)))`,
      cpp: `#include <iostream>\n#include <vector>\nusing namespace std;\nclass Solution { public: vector<vector<int>> kClosest(vector<vector<int>>& points,int k) { /* Write your solution */ return {}; } };\nint main() { vector<vector<int>> p={{1,3},{-2,2}}; cout<<Solution().kClosest(p,1).size()<<endl; }`,
    },
    expectedOutput: { javascript: "1", python: "1", cpp: "1" },
  },
  "clone-graph": {
    id: "clone-graph", title: "Clone Graph", difficulty: "Medium", category: "Graph • Breadth First Search",
    description: { text: "Given an undirected graph as an adjacency list, return an independent copy with the same labels and edges. Nodes are labeled from 0 to n - 1.", notes: ["The graph may be disconnected; clone every component represented by the input."] },
    examples: [{ input: "adjacency = [[1,3],[0,2],[1,3],[0,2]]", output: "[[1,3],[0,2],[1,3],[0,2]]" }, { input: "adjacency = [[]]", output: "[[]]" }],
    constraints: ["0 ≤ n ≤ 100", "1 ≤ adjacency[i].length ≤ 4 when nonempty", "No self-edges or duplicate edges"],
    starterCode: {
      javascript: `function cloneGraph(adjacency) {\n  // Write your solution here\n}\nconsole.log(cloneGraph([[1, 3], [0, 2], [1, 3], [0, 2]]).length);`,
      python: `def cloneGraph(adjacency):\n    # Write your solution here\n    pass\nprint(len(cloneGraph([[1, 3], [0, 2], [1, 3], [0, 2]])))`,
      cpp: `#include <iostream>\n#include <vector>\nusing namespace std;\nclass Solution { public: vector<vector<int>> cloneGraph(vector<vector<int>>& adjacency) { /* Write your solution */ return {}; } };\nint main() { vector<vector<int>> g={{1,3},{0,2},{1,3},{0,2}}; cout<<Solution().cloneGraph(g).size()<<endl; }`,
    },
    expectedOutput: { javascript: "4", python: "4", cpp: "4" },
  },
  "network-delay-time": {
    id: "network-delay-time", title: "Network Delay Time", difficulty: "Medium", category: "Graph • Shortest Path",
    description: { text: "Directed weighted edges describe signal travel times between numbered nodes. Starting at k, return the time for every node to receive the signal, or -1 if some node is unreachable.", notes: ["All edge weights are positive."] },
    examples: [{ input: "times = [[2,1,1],[2,3,1],[3,4,1]], n = 4, k = 2", output: "2" }, { input: "times = [[1,2,1]], n = 2, k = 1", output: "1" }],
    constraints: ["1 ≤ n ≤ 100", "1 ≤ times.length ≤ 6000", "1 ≤ weight ≤ 100", "1 ≤ source, destination, k ≤ n"],
    starterCode: {
      javascript: `function networkDelayTime(times, n, k) {\n  // Write your solution here\n}\nconsole.log(networkDelayTime([[2, 1, 1], [2, 3, 1], [3, 4, 1]], 4, 2));`,
      python: `def networkDelayTime(times, n, k):\n    # Write your solution here\n    pass\nprint(networkDelayTime([[2, 1, 1], [2, 3, 1], [3, 4, 1]], 4, 2))`,
      cpp: `#include <iostream>\n#include <vector>\nusing namespace std;\nclass Solution { public: int networkDelayTime(vector<vector<int>>& times,int n,int k) { /* Write your solution */ return -1; } };\nint main() { vector<vector<int>> e={{2,1,1},{2,3,1},{3,4,1}}; cout<<Solution().networkDelayTime(e,4,2)<<endl; }`,
    },
    expectedOutput: { javascript: "2", python: "2", cpp: "2" },
  },
  "pacific-atlantic-water-flow": {
    id: "pacific-atlantic-water-flow", title: "Pacific Atlantic Water Flow", difficulty: "Medium", category: "Graph • Breadth First Search",
    description: { text: "Water can flow from a cell to an adjacent cell of equal or lower height. Return coordinates of cells from which water can reach both the top/left ocean and the bottom/right ocean.", notes: ["Coordinates may be returned in any order."] },
    examples: [{ input: "heights = [[1,2,2,3,5],[3,2,3,4,4],[2,4,5,3,1],[6,7,1,4,5],[5,1,1,2,4]]", output: "[[0,4],[1,3],[1,4],[2,2],[3,0],[3,1],[4,0]]" }, { input: "heights = [[1]]", output: "[[0,0]]" }],
    constraints: ["1 ≤ rows, columns ≤ 200", "0 ≤ heights[r][c] ≤ 10⁵"],
    starterCode: {
      javascript: `function pacificAtlantic(heights) {\n  // Write your solution here\n}\nconsole.log(pacificAtlantic([[1, 2, 2, 3, 5], [3, 2, 3, 4, 4], [2, 4, 5, 3, 1], [6, 7, 1, 4, 5], [5, 1, 1, 2, 4]]).length);`,
      python: `def pacificAtlantic(heights):\n    # Write your solution here\n    pass\nprint(len(pacificAtlantic([[1, 2, 2, 3, 5], [3, 2, 3, 4, 4], [2, 4, 5, 3, 1], [6, 7, 1, 4, 5], [5, 1, 1, 2, 4]])))`,
      cpp: `#include <iostream>\n#include <vector>\nusing namespace std;\nclass Solution { public: vector<vector<int>> pacificAtlantic(vector<vector<int>>& heights) { /* Write your solution */ return {}; } };\nint main() { vector<vector<int>> h={{1,2,2,3,5},{3,2,3,4,4},{2,4,5,3,1},{6,7,1,4,5},{5,1,1,2,4}}; cout<<Solution().pacificAtlantic(h).size()<<endl; }`,
    },
    expectedOutput: { javascript: "7", python: "7", cpp: "7" },
  },
  "word-search": {
    id: "word-search", title: "Word Search", difficulty: "Medium", category: "Backtracking • Matrix",
    description: { text: "Determine whether a word can be formed by adjacent horizontal or vertical cells in a letter grid. A cell may be used only once in a word.", notes: [] },
    examples: [{ input: 'board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "ABCCED"', output: "true" }, { input: 'board = [["A","B"],["C","D"]], word = "ABCA"', output: "false" }],
    constraints: ["1 ≤ rows, columns ≤ 6", "1 ≤ word.length ≤ 15", "Board cells and word use uppercase English letters"],
    starterCode: {
      javascript: `function exist(board, word) {\n  // Write your solution here\n}\nconsole.log(exist([["A", "B", "C", "E"], ["S", "F", "C", "S"], ["A", "D", "E", "E"]], "ABCCED"));`,
      python: `def exist(board, word):\n    # Write your solution here\n    pass\nprint(exist([["A", "B", "C", "E"], ["S", "F", "C", "S"], ["A", "D", "E", "E"]], "ABCCED"))`,
      cpp: `#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\nclass Solution { public: bool exist(vector<vector<char>>& board,string word) { /* Write your solution */ return false; } };\nint main() { vector<vector<char>> b={{'A','B','C','E'},{'S','F','C','S'},{'A','D','E','E'}}; cout<<(Solution().exist(b,"ABCCED")?"true":"false")<<endl; }`,
    },
    expectedOutput: { javascript: "true", python: "True", cpp: "true" },
  },
  "permutations": {
    id: "permutations", title: "Permutations", difficulty: "Medium", category: "Backtracking • Permutations",
    description: { text: "Return every ordering of the distinct integers in nums. The result may be returned in any order.", notes: [] },
    examples: [{ input: "nums = [1,2,3]", output: "[[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]" }, { input: "nums = [0,1]", output: "[[0,1],[1,0]]" }],
    constraints: ["1 ≤ nums.length ≤ 6", "-10 ≤ nums[i] ≤ 10", "All values are distinct"],
    starterCode: {
      javascript: `function permute(nums) {\n  // Write your solution here\n}\nconsole.log(permute([1, 2, 3]).length);`,
      python: `def permute(nums):\n    # Write your solution here\n    pass\nprint(len(permute([1, 2, 3])))`,
      cpp: `#include <iostream>\n#include <vector>\nusing namespace std;\nclass Solution { public: vector<vector<int>> permute(vector<int>& nums) { /* Write your solution */ return {}; } };\nint main() { vector<int> n={1,2,3}; cout<<Solution().permute(n).size()<<endl; }`,
    },
    expectedOutput: { javascript: "6", python: "6", cpp: "6" },
  },
  "combination-sum": {
    id: "combination-sum", title: "Combination Sum", difficulty: "Medium", category: "Backtracking • Combinations",
    description: { text: "Return unique combinations of candidate values that sum to target. A candidate may be chosen repeatedly; combinations that differ only in order count once.", notes: [] },
    examples: [{ input: "candidates = [2,3,6,7], target = 7", output: "[[2,2,3],[7]]" }, { input: "candidates = [2,3,5], target = 8", output: "[[2,2,2,2],[2,3,3],[3,5]]" }],
    constraints: ["1 ≤ candidates.length ≤ 30", "1 ≤ candidates[i] ≤ 200", "Candidate values are distinct", "1 ≤ target ≤ 500"],
    starterCode: {
      javascript: `function combinationSum(candidates, target) {\n  // Write your solution here\n}\nconsole.log(combinationSum([2, 3, 6, 7], 7).length);`,
      python: `def combinationSum(candidates, target):\n    # Write your solution here\n    pass\nprint(len(combinationSum([2, 3, 6, 7], 7)))`,
      cpp: `#include <iostream>\n#include <vector>\nusing namespace std;\nclass Solution { public: vector<vector<int>> combinationSum(vector<int>& c,int target) { /* Write your solution */ return {}; } };\nint main() { vector<int> c={2,3,6,7}; cout<<Solution().combinationSum(c,7).size()<<endl; }`,
    },
    expectedOutput: { javascript: "2", python: "2", cpp: "2" },
  },
  "longest-increasing-subsequence": {
    id: "longest-increasing-subsequence", title: "Longest Increasing Subsequence", difficulty: "Medium", category: "Dynamic Programming • Subsequences",
    description: { text: "Return the length of the longest strictly increasing subsequence. Elements in a subsequence retain their original relative order but need not be adjacent.", notes: ["An O(n log n) solution is possible."] },
    examples: [{ input: "nums = [10,9,2,5,3,7,101,18]", output: "4" }, { input: "nums = [0,1,0,3,2,3]", output: "4" }],
    constraints: ["1 ≤ nums.length ≤ 2500", "-10⁴ ≤ nums[i] ≤ 10⁴"],
    starterCode: {
      javascript: `function lengthOfLIS(nums) {\n  // Write your solution here\n}\nconsole.log(lengthOfLIS([10, 9, 2, 5, 3, 7, 101, 18]));`,
      python: `def lengthOfLIS(nums):\n    # Write your solution here\n    pass\nprint(lengthOfLIS([10, 9, 2, 5, 3, 7, 101, 18]))`,
      cpp: `#include <iostream>\n#include <vector>\nusing namespace std;\nclass Solution { public: int lengthOfLIS(vector<int>& nums) { /* Write your solution */ return 0; } };\nint main() { vector<int> n={10,9,2,5,3,7,101,18}; cout<<Solution().lengthOfLIS(n)<<endl; }`,
    },
    expectedOutput: { javascript: "4", python: "4", cpp: "4" },
  },
  "coin-change-combinations": {
    id: "coin-change-combinations", title: "Coin Change II", difficulty: "Medium", category: "Dynamic Programming • Combinations",
    description: { text: "Given coin denominations and an amount, return the number of distinct combinations that make the amount. Coins of the same denomination are unlimited, and order does not create a new combination.", notes: [] },
    examples: [{ input: "amount = 5, coins = [1,2,5]", output: "4" }, { input: "amount = 3, coins = [2]", output: "0" }],
    constraints: ["0 ≤ amount ≤ 5000", "1 ≤ coins.length ≤ 300", "1 ≤ coins[i] ≤ 5000", "Coin denominations are distinct"],
    starterCode: {
      javascript: `function change(amount, coins) {\n  // Write your solution here\n}\nconsole.log(change(5, [1, 2, 5]));`,
      python: `def change(amount, coins):\n    # Write your solution here\n    pass\nprint(change(5, [1, 2, 5]))`,
      cpp: `#include <iostream>\n#include <vector>\nusing namespace std;\nclass Solution { public: int change(int amount,vector<int>& coins) { /* Write your solution */ return 0; } };\nint main() { vector<int> c={1,2,5}; cout<<Solution().change(5,c)<<endl; }`,
    },
    expectedOutput: { javascript: "4", python: "4", cpp: "4" },
  },
  "unique-paths": {
    id: "unique-paths", title: "Unique Paths", difficulty: "Medium", category: "Dynamic Programming • Grid",
    description: { text: "A robot begins in the top-left cell of an m by n grid and may move only right or down. Return the number of distinct paths to the bottom-right cell.", notes: [] },
    examples: [{ input: "m = 3, n = 7", output: "28" }, { input: "m = 3, n = 2", output: "3" }],
    constraints: ["1 ≤ m, n ≤ 100", "The answer fits in a 32-bit signed integer"],
    starterCode: {
      javascript: `function uniquePaths(m, n) {\n  // Write your solution here\n}\nconsole.log(uniquePaths(3, 7));`,
      python: `def uniquePaths(m, n):\n    # Write your solution here\n    pass\nprint(uniquePaths(3, 7))`,
      cpp: `#include <iostream>\nusing namespace std;\nclass Solution { public: int uniquePaths(int m,int n) { /* Write your solution */ return 0; } };\nint main() { cout<<Solution().uniquePaths(3,7)<<endl; }`,
    },
    expectedOutput: { javascript: "28", python: "28", cpp: "28" },
  },
  "jump-game": {
    id: "jump-game", title: "Jump Game", difficulty: "Medium", category: "Array • Greedy",
    description: { text: "Each value gives the maximum forward jump length from that index. Return whether the final index is reachable from index zero.", notes: [] },
    examples: [{ input: "nums = [2,3,1,1,4]", output: "true" }, { input: "nums = [3,2,1,0,4]", output: "false" }],
    constraints: ["1 ≤ nums.length ≤ 10⁴", "0 ≤ nums[i] ≤ 10⁵"],
    starterCode: {
      javascript: `function canJump(nums) {\n  // Write your solution here\n}\nconsole.log(canJump([2, 3, 1, 1, 4]));`,
      python: `def canJump(nums):\n    # Write your solution here\n    pass\nprint(canJump([2, 3, 1, 1, 4]))`,
      cpp: `#include <iostream>\n#include <vector>\nusing namespace std;\nclass Solution { public: bool canJump(vector<int>& nums) { /* Write your solution */ return false; } };\nint main() { vector<int> n={2,3,1,1,4}; cout<<(Solution().canJump(n)?"true":"false")<<endl; }`,
    },
    expectedOutput: { javascript: "true", python: "True", cpp: "true" },
  },
  "gas-station": {
    id: "gas-station", title: "Gas Station", difficulty: "Medium", category: "Greedy • Array",
    description: { text: "A circular route has gas[i] fuel at station i and costs[i] fuel to travel to the next station. Return a starting index that completes the circuit, or -1 if none exists. The solution is unique when it exists.", notes: [] },
    examples: [{ input: "gas = [1,2,3,4,5], cost = [3,4,5,1,2]", output: "3" }, { input: "gas = [2,3,4], cost = [3,4,3]", output: "-1" }],
    constraints: ["1 ≤ gas.length = cost.length ≤ 10⁵", "0 ≤ gas[i], cost[i] ≤ 10⁴"],
    starterCode: {
      javascript: `function canCompleteCircuit(gas, cost) {\n  // Write your solution here\n}\nconsole.log(canCompleteCircuit([1, 2, 3, 4, 5], [3, 4, 5, 1, 2]));`,
      python: `def canCompleteCircuit(gas, cost):\n    # Write your solution here\n    pass\nprint(canCompleteCircuit([1, 2, 3, 4, 5], [3, 4, 5, 1, 2]))`,
      cpp: `#include <iostream>\n#include <vector>\nusing namespace std;\nclass Solution { public: int canCompleteCircuit(vector<int>& gas,vector<int>& cost) { /* Write your solution */ return -1; } };\nint main() { vector<int> g={1,2,3,4,5},c={3,4,5,1,2}; cout<<Solution().canCompleteCircuit(g,c)<<endl; }`,
    },
    expectedOutput: { javascript: "3", python: "3", cpp: "3" },
  },
  "search-2d-matrix": {
    id: "search-2d-matrix", title: "Search a 2D Matrix", difficulty: "Medium", category: "Binary Search • Matrix",
    description: { text: "Search for a target in a matrix whose rows are sorted and whose first value in each row is greater than the last value of the previous row. Return whether target exists in O(log(mn)) time.", notes: [] },
    examples: [{ input: "matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 3", output: "true" }, { input: "matrix = [[1,3,5]], target = 2", output: "false" }],
    constraints: ["1 ≤ rows, columns ≤ 100", "-10⁴ ≤ matrix[r][c], target ≤ 10⁴", "Rows are sorted and non-overlapping"],
    starterCode: {
      javascript: `function searchMatrix(matrix, target) {\n  // Write your solution here\n}\nconsole.log(searchMatrix([[1, 3, 5, 7], [10, 11, 16, 20], [23, 30, 34, 60]], 3));`,
      python: `def searchMatrix(matrix, target):\n    # Write your solution here\n    pass\nprint(searchMatrix([[1, 3, 5, 7], [10, 11, 16, 20], [23, 30, 34, 60]], 3))`,
      cpp: `#include <iostream>\n#include <vector>\nusing namespace std;\nclass Solution { public: bool searchMatrix(vector<vector<int>>& m,int target) { /* Write your solution */ return false; } };\nint main() { vector<vector<int>> m={{1,3,5,7},{10,11,16,20},{23,30,34,60}}; cout<<(Solution().searchMatrix(m,3)?"true":"false")<<endl; }`,
    },
    expectedOutput: { javascript: "true", python: "True", cpp: "true" },
  },
  "find-min-rotated-array": {
    id: "find-min-rotated-array", title: "Find Minimum in Rotated Sorted Array", difficulty: "Medium", category: "Array • Binary Search",
    description: { text: "A strictly increasing array was rotated an unknown number of times. Return its smallest value in O(log n) time.", notes: [] },
    examples: [{ input: "nums = [3,4,5,1,2]", output: "1" }, { input: "nums = [11,13,15,17]", output: "11" }],
    constraints: ["1 ≤ nums.length ≤ 5000", "All values are distinct", "-5000 ≤ nums[i] ≤ 5000"],
    starterCode: {
      javascript: `function findMin(nums) {\n  // Write your solution here\n}\nconsole.log(findMin([3, 4, 5, 1, 2]));`,
      python: `def findMin(nums):\n    # Write your solution here\n    pass\nprint(findMin([3, 4, 5, 1, 2]))`,
      cpp: `#include <iostream>\n#include <vector>\nusing namespace std;\nclass Solution { public: int findMin(vector<int>& nums) { /* Write your solution */ return 0; } };\nint main() { vector<int> n={3,4,5,1,2}; cout<<Solution().findMin(n)<<endl; }`,
    },
    expectedOutput: { javascript: "1", python: "1", cpp: "1" },
  },
  "kth-smallest-bst": {
    id: "kth-smallest-bst", title: "Kth Smallest Element in a BST", difficulty: "Medium", category: "Tree • Binary Search Tree",
    description: { text: "Given a binary search tree in level-order array form and a valid k, return its kth smallest value. Use null for absent children.", notes: ["BST values are unique. In the C++ starter, -1 represents a missing child; node values are nonnegative."] },
    examples: [{ input: "root = [3,1,4,null,2], k = 1", output: "1" }, { input: "root = [5,3,6,2,4,null,null,1], k = 3", output: "3" }],
    constraints: ["1 ≤ number of nodes ≤ 10⁴", "1 ≤ k ≤ number of nodes", "0 ≤ node value ≤ 10⁴"],
    starterCode: {
      javascript: `function kthSmallest(levelOrder, k) {\n  // Write your solution here\n}\nconsole.log(kthSmallest([3, 1, 4, null, 2], 1));`,
      python: `def kthSmallest(levelOrder, k):\n    # Write your solution here\n    pass\nprint(kthSmallest([3, 1, 4, None, 2], 1))`,
      cpp: `#include <iostream>\n#include <vector>\nusing namespace std;\nclass Solution { public: int kthSmallest(vector<int> levelOrder,int k) { /* Write your solution */ return -1; } };\nint main() { cout<<Solution().kthSmallest({3,1,4,-1,2},1)<<endl; }`,
    },
    expectedOutput: { javascript: "1", python: "1", cpp: "1" },
  },
  "lca-bst": {
    id: "lca-bst", title: "Lowest Common Ancestor of a BST", difficulty: "Medium", category: "Tree • Binary Search Tree",
    description: { text: "Given a BST and two values that are present in it, return the value of their lowest common ancestor: the deepest node that has both values in its subtree.", notes: ["In the C++ starter, -1 represents a missing child; node values are nonnegative."] },
    examples: [{ input: "root = [6,2,8,0,4,7,9,null,null,3,5], p = 2, q = 8", output: "6" }, { input: "root = [6,2,8,0,4,7,9,null,null,3,5], p = 2, q = 4", output: "2" }],
    constraints: ["2 ≤ number of nodes ≤ 10⁵", "0 ≤ node value ≤ 10⁹", "p and q are distinct and present in the tree"],
    starterCode: {
      javascript: `function lowestCommonAncestor(levelOrder, p, q) {\n  // Write your solution here\n}\nconsole.log(lowestCommonAncestor([6, 2, 8, 0, 4, 7, 9, null, null, 3, 5], 2, 8));`,
      python: `def lowestCommonAncestor(levelOrder, p, q):\n    # Write your solution here\n    pass\nprint(lowestCommonAncestor([6, 2, 8, 0, 4, 7, 9, None, None, 3, 5], 2, 8))`,
      cpp: `#include <iostream>\n#include <vector>\nusing namespace std;\nclass Solution { public: int lowestCommonAncestor(vector<int> levelOrder,int p,int q) { /* Write your solution */ return -1; } };\nint main() { cout<<Solution().lowestCommonAncestor({6,2,8,0,4,7,9,-1,-1,3,5},2,8)<<endl; }`,
    },
    expectedOutput: { javascript: "6", python: "6", cpp: "6" },
  },
  "median-data-stream": {
    id: "median-data-stream", title: "Find Median from Data Stream", difficulty: "Hard", category: "Heap • Priority Queue",
    description: { text: "Design a data structure that accepts integers and returns the median of all values added so far. For an even count, the median is the average of the two middle values.", notes: ["Each add and median query should be efficient."] },
    examples: [{ input: "add(1), add(2), median(), add(3), median()", output: "1.5, 2" }, { input: "add(5), median()", output: "5" }],
    constraints: ["-10⁵ ≤ value ≤ 10⁵", "At least one value exists before a median query", "At most 5 × 10⁴ operations"],
    starterCode: {
      javascript: `class MedianFinder {\n  constructor() { /* Initialize your data structure */ }\n  addNum(value) { /* Write your solution */ }\n  findMedian() { /* Write your solution */ }\n}\nconst m = new MedianFinder(); m.addNum(1); m.addNum(2); console.log(m.findMedian()); m.addNum(3); console.log(m.findMedian());`,
      python: `class MedianFinder:\n    def __init__(self):\n        # Initialize your data structure\n        pass\n    def addNum(self, value):\n        # Write your solution\n        pass\n    def findMedian(self):\n        # Write your solution\n        pass\nm = MedianFinder()\nm.addNum(1)\nm.addNum(2)\nprint(m.findMedian())\nm.addNum(3)\nprint(m.findMedian())`,
      cpp: `#include <iostream>\nusing namespace std;\nclass MedianFinder { public: void addNum(int value) {} double findMedian() { return 0.0; } };\nint main() { MedianFinder m; m.addNum(1); m.addNum(2); cout<<m.findMedian()<<endl; m.addNum(3); cout<<m.findMedian()<<endl; }`,
    },
    expectedOutput: { javascript: "1.5\n2", python: "1.5\n2.0", cpp: "1.5\n2" },
  },
  "merge-k-sorted-lists": {
    id: "merge-k-sorted-lists", title: "Merge K Sorted Lists", difficulty: "Hard", category: "Heap • Linked List",
    description: { text: "Given k sorted lists of values, merge them into one sorted list. Preserve duplicates and use an efficient approach when k is large.", notes: ["Each list is sorted in non-decreasing order."] },
    examples: [{ input: "lists = [[1,4,5],[1,3,4],[2,6]]", output: "[1,1,2,3,4,4,5,6]" }, { input: "lists = []", output: "[]" }],
    constraints: ["0 ≤ number of lists ≤ 10⁴", "0 ≤ values per list ≤ 500", "Total number of values ≤ 10⁴", "-10⁴ ≤ value ≤ 10⁴"],
    starterCode: {
      javascript: `function mergeKLists(lists) {\n  // Write your solution here\n}\nconsole.log(mergeKLists([[1, 4, 5], [1, 3, 4], [2, 6]]).length);`,
      python: `def mergeKLists(lists):\n    # Write your solution here\n    pass\nprint(len(mergeKLists([[1, 4, 5], [1, 3, 4], [2, 6]])))`,
      cpp: `#include <iostream>\n#include <vector>\nusing namespace std;\nclass Solution { public: vector<int> mergeKLists(vector<vector<int>>& lists) { /* Write your solution */ return {}; } };\nint main() { vector<vector<int>> a={{1,4,5},{1,3,4},{2,6}}; cout<<Solution().mergeKLists(a).size()<<endl; }`,
    },
    expectedOutput: { javascript: "8", python: "8", cpp: "8" },
  },
  "n-queens": {
    id: "n-queens", title: "N-Queens", difficulty: "Hard", category: "Backtracking • Constraint Search",
    description: { text: "Place n queens on an n by n chessboard so that no two queens share a row, column, or diagonal. Return the number of distinct valid boards.", notes: [] },
    examples: [{ input: "n = 4", output: "2" }, { input: "n = 1", output: "1" }],
    constraints: ["1 ≤ n ≤ 9"],
    starterCode: {
      javascript: `function totalNQueens(n) {\n  // Write your solution here\n}\nconsole.log(totalNQueens(4));`,
      python: `def totalNQueens(n):\n    # Write your solution here\n    pass\nprint(totalNQueens(4))`,
      cpp: `#include <iostream>\nusing namespace std;\nclass Solution { public: int totalNQueens(int n) { /* Write your solution */ return 0; } };\nint main() { cout<<Solution().totalNQueens(4)<<endl; }`,
    },
    expectedOutput: { javascript: "2", python: "2", cpp: "2" },
  },
  "word-search-ii": {
    id: "word-search-ii", title: "Word Search II", difficulty: "Hard", category: "Trie • Backtracking",
    description: { text: "Given a letter board and a list of words, return every listed word that can be formed by adjacent horizontal or vertical cells without reusing a cell within a word. Return each found word once.", notes: ["The output order does not matter."] },
    examples: [{ input: 'board = [["o","a","a","n"],["e","t","a","e"],["i","h","k","r"],["i","f","l","v"]], words = ["oath","pea","eat","rain"]', output: '["eat","oath"]' }, { input: 'board = [["a","b"],["c","d"]], words = ["abcb"]', output: "[]" }],
    constraints: ["1 ≤ rows, columns ≤ 12", "1 ≤ words.length ≤ 3 × 10⁴", "1 ≤ word.length ≤ 10", "Board and words contain lowercase English letters"],
    starterCode: {
      javascript: `function findWords(board, words) {\n  // Write your solution here\n}\nconsole.log(findWords([["o", "a", "a", "n"], ["e", "t", "a", "e"], ["i", "h", "k", "r"], ["i", "f", "l", "v"]], ["oath", "pea", "eat", "rain"]).length);`,
      python: `def findWords(board, words):\n    # Write your solution here\n    pass\nprint(len(findWords([["o", "a", "a", "n"], ["e", "t", "a", "e"], ["i", "h", "k", "r"], ["i", "f", "l", "v"]], ["oath", "pea", "eat", "rain"])))`,
      cpp: `#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\nclass Solution { public: vector<string> findWords(vector<vector<char>>& board,vector<string>& words) { /* Write your solution */ return {}; } };\nint main() { vector<vector<char>> b={{'o','a','a','n'},{'e','t','a','e'},{'i','h','k','r'},{'i','f','l','v'}}; vector<string> w={"oath","pea","eat","rain"}; cout<<Solution().findWords(b,w).size()<<endl; }`,
    },
    expectedOutput: { javascript: "2", python: "2", cpp: "2" },
  },
  "largest-rectangle-histogram": {
    id: "largest-rectangle-histogram", title: "Largest Rectangle in Histogram", difficulty: "Hard", category: "Stack • Monotonic Stack",
    description: { text: "Each bar in a histogram has width one and a given nonnegative height. Return the largest rectangle that can fit entirely under the bars.", notes: [] },
    examples: [{ input: "heights = [2,1,5,6,2,3]", output: "10" }, { input: "heights = [2,4]", output: "4" }],
    constraints: ["1 ≤ heights.length ≤ 10⁵", "0 ≤ heights[i] ≤ 10⁴"],
    starterCode: {
      javascript: `function largestRectangleArea(heights) {\n  // Write your solution here\n}\nconsole.log(largestRectangleArea([2, 1, 5, 6, 2, 3]));`,
      python: `def largestRectangleArea(heights):\n    # Write your solution here\n    pass\nprint(largestRectangleArea([2, 1, 5, 6, 2, 3]))`,
      cpp: `#include <iostream>\n#include <vector>\nusing namespace std;\nclass Solution { public: int largestRectangleArea(vector<int>& heights) { /* Write your solution */ return 0; } };\nint main() { vector<int> h={2,1,5,6,2,3}; cout<<Solution().largestRectangleArea(h)<<endl; }`,
    },
    expectedOutput: { javascript: "10", python: "10", cpp: "10" },
  },
  "trapping-rain-water": {
    id: "trapping-rain-water", title: "Trapping Rain Water", difficulty: "Hard", category: "Array • Two Pointers",
    description: { text: "Given nonnegative bar heights with unit width, return how many units of water remain after rain. Water above a position is bounded by the tallest bars to its left and right.", notes: ["Aim for linear time and constant extra space."] },
    examples: [{ input: "height = [0,1,0,2,1,0,1,3,2,1,2,1]", output: "6" }, { input: "height = [4,2,0,3,2,5]", output: "9" }],
    constraints: ["1 ≤ height.length ≤ 2 × 10⁴", "0 ≤ height[i] ≤ 10⁵"],
    starterCode: {
      javascript: `function trap(height) {\n  // Write your solution here\n}\nconsole.log(trap([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]));`,
      python: `def trap(height):\n    # Write your solution here\n    pass\nprint(trap([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]))`,
      cpp: `#include <iostream>\n#include <vector>\nusing namespace std;\nclass Solution { public: int trap(vector<int>& height) { /* Write your solution */ return 0; } };\nint main() { vector<int> h={0,1,0,2,1,0,1,3,2,1,2,1}; cout<<Solution().trap(h)<<endl; }`,
    },
    expectedOutput: { javascript: "6", python: "6", cpp: "6" },
  },
  "missing-number": {
    id: "missing-number", title: "Missing Number", difficulty: "Easy", category: "Array • Math",
    description: { text: "An array contains n distinct values chosen from 0 through n. Return the one value in that range that is missing.", notes: ["Try an O(n) time and O(1) extra-space solution."] },
    examples: [{ input: "nums = [3,0,1]", output: "2" }, { input: "nums = [0,1]", output: "2" }],
    constraints: ["1 ≤ nums.length ≤ 10⁴", "All values are distinct", "0 ≤ nums[i] ≤ nums.length"],
    starterCode: {
      javascript: `function missingNumber(nums) {\n  // Write your solution here\n}\nconsole.log(missingNumber([3, 0, 1]));`,
      python: `def missingNumber(nums):\n    # Write your solution here\n    pass\nprint(missingNumber([3, 0, 1]))`,
      cpp: `#include <iostream>\n#include <vector>\nusing namespace std;\nclass Solution { public: int missingNumber(vector<int>& nums) { /* Write your solution */ return 0; } };\nint main() { vector<int> n={3,0,1}; cout<<Solution().missingNumber(n)<<endl; }`,
    },
    expectedOutput: { javascript: "2", python: "2", cpp: "2" },
  },
  "single-number": {
    id: "single-number", title: "Single Number", difficulty: "Easy", category: "Array • Bit Manipulation",
    description: { text: "Every value in an integer array appears exactly twice except one value, which appears once. Return the value that appears once.", notes: ["Can you solve it in linear time without extra storage?"] },
    examples: [{ input: "nums = [4,1,2,1,2]", output: "4" }, { input: "nums = [2,2,1]", output: "1" }],
    constraints: ["1 ≤ nums.length ≤ 3 × 10⁴", "nums.length is odd", "Exactly one value appears once; all others appear twice", "-3 × 10⁴ ≤ nums[i] ≤ 3 × 10⁴"],
    starterCode: {
      javascript: `function singleNumber(nums) {\n  // Write your solution here\n}\nconsole.log(singleNumber([4, 1, 2, 1, 2]));`,
      python: `def singleNumber(nums):\n    # Write your solution here\n    pass\nprint(singleNumber([4, 1, 2, 1, 2]))`,
      cpp: `#include <iostream>\n#include <vector>\nusing namespace std;\nclass Solution { public: int singleNumber(vector<int>& nums) { /* Write your solution */ return 0; } };\nint main() { vector<int> n={4,1,2,1,2}; cout<<Solution().singleNumber(n)<<endl; }`,
    },
    expectedOutput: { javascript: "4", python: "4", cpp: "4" },
  },
  "is-subsequence": {
    id: "is-subsequence", title: "Is Subsequence", difficulty: "Easy", category: "String • Two Pointers",
    description: { text: "Return true when all characters of s appear in t in the same order, possibly with other characters between them.", notes: ["An empty s is a subsequence of every string."] },
    examples: [{ input: 's = "abc", t = "ahbgdc"', output: "true" }, { input: 's = "axc", t = "ahbgdc"', output: "false" }],
    constraints: ["0 ≤ s.length ≤ 100", "0 ≤ t.length ≤ 10⁴", "s and t contain lowercase English letters"],
    starterCode: {
      javascript: `function isSubsequence(s, t) {\n  // Write your solution here\n}\nconsole.log(isSubsequence("abc", "ahbgdc"));`,
      python: `def isSubsequence(s, t):\n    # Write your solution here\n    pass\nprint(isSubsequence("abc", "ahbgdc"))`,
      cpp: `#include <iostream>\n#include <string>\nusing namespace std;\nclass Solution { public: bool isSubsequence(string s,string t) { /* Write your solution */ return false; } };\nint main() { cout<<(Solution().isSubsequence("abc","ahbgdc")?"true":"false")<<endl; }`,
    },
    expectedOutput: { javascript: "true", python: "True", cpp: "true" },
  },
  "maximum-average-subarray": {
    id: "maximum-average-subarray", title: "Maximum Average Subarray I", difficulty: "Easy", category: "Array • Sliding Window",
    description: { text: "Given an array and an integer k, find the contiguous subarray of length k with the largest average and return that average.", notes: ["An answer within 10⁻⁵ of the correct value is accepted."] },
    examples: [{ input: "nums = [1,12,-5,-6,50,3], k = 4", output: "12.75" }, { input: "nums = [5], k = 1", output: "5" }],
    constraints: ["1 ≤ k ≤ nums.length ≤ 10⁵", "-10⁴ ≤ nums[i] ≤ 10⁴"],
    starterCode: {
      javascript: `function findMaxAverage(nums, k) {\n  // Write your solution here\n}\nconsole.log(findMaxAverage([1, 12, -5, -6, 50, 3], 4));`,
      python: `def findMaxAverage(nums, k):\n    # Write your solution here\n    pass\nprint(findMaxAverage([1, 12, -5, -6, 50, 3], 4))`,
      cpp: `#include <iostream>\n#include <vector>\nusing namespace std;\nclass Solution { public: double findMaxAverage(vector<int>& nums,int k) { /* Write your solution */ return 0.0; } };\nint main() { vector<int> n={1,12,-5,-6,50,3}; cout<<Solution().findMaxAverage(n,4)<<endl; }`,
    },
    expectedOutput: { javascript: "12.75", python: "12.75", cpp: "12.75" },
  },
  "pivot-index": {
    id: "pivot-index", title: "Find Pivot Index", difficulty: "Easy", category: "Array • Prefix Sum",
    description: { text: "Return the leftmost index where the sum of values strictly to its left equals the sum strictly to its right. Return -1 if no such index exists.", notes: ["The value at the pivot is excluded from both sums."] },
    examples: [{ input: "nums = [1,7,3,6,5,6]", output: "3" }, { input: "nums = [1,2,3]", output: "-1" }],
    constraints: ["1 ≤ nums.length ≤ 10⁴", "-1000 ≤ nums[i] ≤ 1000"],
    starterCode: {
      javascript: `function pivotIndex(nums) {\n  // Write your solution here\n}\nconsole.log(pivotIndex([1, 7, 3, 6, 5, 6]));`,
      python: `def pivotIndex(nums):\n    # Write your solution here\n    pass\nprint(pivotIndex([1, 7, 3, 6, 5, 6]))`,
      cpp: `#include <iostream>\n#include <vector>\nusing namespace std;\nclass Solution { public: int pivotIndex(vector<int>& nums) { /* Write your solution */ return -1; } };\nint main() { vector<int> n={1,7,3,6,5,6}; cout<<Solution().pivotIndex(n)<<endl; }`,
    },
    expectedOutput: { javascript: "3", python: "3", cpp: "3" },
  },
  "diameter-binary-tree": {
    id: "diameter-binary-tree", title: "Diameter of Binary Tree", difficulty: "Easy", category: "Tree • Depth First Search",
    description: { text: "Return the length of the longest path between any two nodes in a binary tree, measured in edges. The tree is given in level-order array form; null marks a missing child.", notes: ["The path may pass through the root or avoid it. In C++, -1 represents null; node values are nonnegative."] },
    examples: [{ input: "root = [1,2,3,4,5]", output: "3" }, { input: "root = [1,2]", output: "1" }],
    constraints: ["1 ≤ number of nodes ≤ 10⁴", "0 ≤ node value ≤ 100"],
    starterCode: {
      javascript: `function diameterOfBinaryTree(levelOrder) {\n  // Write your solution here\n}\nconsole.log(diameterOfBinaryTree([1, 2, 3, 4, 5]));`,
      python: `def diameterOfBinaryTree(levelOrder):\n    # Write your solution here\n    pass\nprint(diameterOfBinaryTree([1, 2, 3, 4, 5]))`,
      cpp: `#include <iostream>\n#include <vector>\nusing namespace std;\nclass Solution { public: int diameterOfBinaryTree(vector<int> levelOrder) { /* Write your solution */ return 0; } };\nint main() { cout<<Solution().diameterOfBinaryTree({1,2,3,4,5})<<endl; }`,
    },
    expectedOutput: { javascript: "3", python: "3", cpp: "3" },
  },
  "same-tree": {
    id: "same-tree", title: "Same Tree", difficulty: "Easy", category: "Tree • Depth First Search",
    description: { text: "Given two binary trees in level-order array form, determine whether they have the same structure and equal values at every corresponding node. Use null for missing children.", notes: ["In C++, -1 represents null; node values are nonnegative."] },
    examples: [{ input: "p = [1,2,3], q = [1,2,3]", output: "true" }, { input: "p = [1,2], q = [1,null,2]", output: "false" }],
    constraints: ["0 ≤ nodes in each tree ≤ 100", "0 ≤ node value ≤ 10⁴"],
    starterCode: {
      javascript: `function isSameTree(p, q) {\n  // Write your solution here\n}\nconsole.log(isSameTree([1, 2, 3], [1, 2, 3]));`,
      python: `def isSameTree(p, q):\n    # Write your solution here\n    pass\nprint(isSameTree([1, 2, 3], [1, 2, 3]))`,
      cpp: `#include <iostream>\n#include <vector>\nusing namespace std;\nclass Solution { public: bool isSameTree(vector<int> p,vector<int> q) { /* Write your solution */ return false; } };\nint main() { cout<<(Solution().isSameTree({1,2,3},{1,2,3})?"true":"false")<<endl; }`,
    },
    expectedOutput: { javascript: "true", python: "True", cpp: "true" },
  },
  "intersection-of-arrays": {
    id: "intersection-of-arrays", title: "Intersection of Two Arrays", difficulty: "Easy", category: "Array • Hash Table",
    description: { text: "Return the distinct values that appear in both integer arrays. Each value should appear once in the result; the result may be in any order.", notes: [] },
    examples: [{ input: "nums1 = [1,2,2,1], nums2 = [2,2]", output: "[2]" }, { input: "nums1 = [4,9,5], nums2 = [9,4,9,8,4]", output: "[9,4]" }],
    constraints: ["1 ≤ nums1.length, nums2.length ≤ 1000", "0 ≤ nums[i] ≤ 1000"],
    starterCode: {
      javascript: `function intersection(nums1, nums2) {\n  // Write your solution here\n}\nconsole.log(intersection([1, 2, 2, 1], [2, 2]).length);`,
      python: `def intersection(nums1, nums2):\n    # Write your solution here\n    pass\nprint(len(intersection([1, 2, 2, 1], [2, 2])))`,
      cpp: `#include <iostream>\n#include <vector>\nusing namespace std;\nclass Solution { public: vector<int> intersection(vector<int>& a,vector<int>& b) { /* Write your solution */ return {}; } };\nint main() { vector<int> a={1,2,2,1},b={2,2}; cout<<Solution().intersection(a,b).size()<<endl; }`,
    },
    expectedOutput: { javascript: "1", python: "1", cpp: "1" },
  },
  "subarray-sum-k": {
    id: "subarray-sum-k", title: "Subarray Sum Equals K", difficulty: "Medium", category: "Array • Prefix Sum • Hash Table",
    description: { text: "Return the number of contiguous subarrays whose values sum to k. Values may be negative, so a sliding window is not sufficient in general.", notes: [] },
    examples: [{ input: "nums = [1,1,1], k = 2", output: "2" }, { input: "nums = [1,2,3], k = 3", output: "2" }],
    constraints: ["1 ≤ nums.length ≤ 2 × 10⁴", "-1000 ≤ nums[i] ≤ 1000", "-10⁷ ≤ k ≤ 10⁷"],
    starterCode: {
      javascript: `function subarraySum(nums, k) {\n  // Write your solution here\n}\nconsole.log(subarraySum([1, 1, 1], 2));`,
      python: `def subarraySum(nums, k):\n    # Write your solution here\n    pass\nprint(subarraySum([1, 1, 1], 2))`,
      cpp: `#include <iostream>\n#include <vector>\nusing namespace std;\nclass Solution { public: int subarraySum(vector<int>& nums,int k) { /* Write your solution */ return 0; } };\nint main() { vector<int> n={1,1,1}; cout<<Solution().subarraySum(n,2)<<endl; }`,
    },
    expectedOutput: { javascript: "2", python: "2", cpp: "2" },
  },
  "character-replacement": {
    id: "character-replacement", title: "Longest Repeating Character Replacement", difficulty: "Medium", category: "String • Sliding Window",
    description: { text: "Given an uppercase string and an integer k, return the length of the longest substring that can be made of one repeated letter by changing at most k characters.", notes: [] },
    examples: [{ input: 's = "ABAB", k = 2', output: "4" }, { input: 's = "AABABBA", k = 1', output: "4" }],
    constraints: ["1 ≤ s.length ≤ 10⁵", "s contains uppercase English letters", "0 ≤ k ≤ s.length"],
    starterCode: {
      javascript: `function characterReplacement(s, k) {\n  // Write your solution here\n}\nconsole.log(characterReplacement("ABAB", 2));`,
      python: `def characterReplacement(s, k):\n    # Write your solution here\n    pass\nprint(characterReplacement("ABAB", 2))`,
      cpp: `#include <iostream>\n#include <string>\nusing namespace std;\nclass Solution { public: int characterReplacement(string s,int k) { /* Write your solution */ return 0; } };\nint main() { cout<<Solution().characterReplacement("ABAB",2)<<endl; }`,
    },
    expectedOutput: { javascript: "4", python: "4", cpp: "4" },
  },
  "sort-colors": {
    id: "sort-colors", title: "Sort Colors", difficulty: "Medium", category: "Array • Two Pointers",
    description: { text: "Sort an array containing only 0, 1, and 2 in place so equal colors are adjacent and ordered 0, 1, 2. Do not use a library sort.", notes: ["Aim for one pass and constant extra space."] },
    examples: [{ input: "nums = [2,0,2,1,1,0]", output: "[0,0,1,1,2,2]" }, { input: "nums = [2,0,1]", output: "[0,1,2]" }],
    constraints: ["1 ≤ nums.length ≤ 300", "nums[i] is 0, 1, or 2"],
    starterCode: {
      javascript: `function sortColors(nums) {\n  // Write your solution here\n}\nconst nums = [2, 0, 2, 1, 1, 0]; sortColors(nums); console.log(JSON.stringify(nums));`,
      python: `def sortColors(nums):\n    # Write your solution here\n    pass\nnums = [2, 0, 2, 1, 1, 0]\nsortColors(nums)\nprint(nums)`,
      cpp: `#include <iostream>\n#include <vector>\nusing namespace std;\nclass Solution { public: void sortColors(vector<int>& nums) { /* Write your solution */ } };\nint main() { vector<int> n={2,0,2,1,1,0}; Solution().sortColors(n); for(int x:n) cout<<x<<" "; cout<<endl; }`,
    },
    expectedOutput: { javascript: "[0,0,1,1,2,2]", python: "[0, 0, 1, 1, 2, 2]", cpp: "0 0 1 1 2 2 " },
  },
  "find-peak-element": {
    id: "find-peak-element", title: "Find Peak Element", difficulty: "Medium", category: "Array • Binary Search",
    description: { text: "Return any index whose value is strictly greater than its neighbors. Treat values outside the array as negative infinity and target O(log n) time.", notes: ["A peak is guaranteed to exist."] },
    examples: [{ input: "nums = [1,2,3,1]", output: "2" }, { input: "nums = [1,2,1,3,5,6,4]", output: "1", explanation: "Index 1 is a valid peak; index 5 is also a valid answer." }],
    constraints: ["1 ≤ nums.length ≤ 1000", "-2³¹ ≤ nums[i] ≤ 2³¹ - 1", "Adjacent values are never equal"],
    starterCode: {
      javascript: `function findPeakElement(nums) {\n  // Write your solution here\n}\nconsole.log(findPeakElement([1, 2, 3, 1]));`,
      python: `def findPeakElement(nums):\n    # Write your solution here\n    pass\nprint(findPeakElement([1, 2, 3, 1]))`,
      cpp: `#include <iostream>\n#include <vector>\nusing namespace std;\nclass Solution { public: int findPeakElement(vector<int>& nums) { /* Write your solution */ return 0; } };\nint main() { vector<int> n={1,2,3,1}; cout<<Solution().findPeakElement(n)<<endl; }`,
    },
    expectedOutput: { javascript: "2", python: "2", cpp: "2" },
  },
  "time-based-key-value": {
    id: "time-based-key-value", title: "Time Based Key-Value Store", difficulty: "Medium", category: "Hash Table • Binary Search",
    description: { text: "Design a store that records values for keys at increasing timestamps. get(key, t) returns the value with the greatest timestamp not exceeding t, or an empty string if none exists.", notes: ["Timestamps for each key are added in strictly increasing order."] },
    examples: [{ input: 'set("foo","bar",1), get("foo",1), get("foo",3), set("foo","bar2",4), get("foo",4)', output: '["bar","bar","bar2"]' }],
    constraints: ["1 ≤ key.length, value.length ≤ 100", "1 ≤ timestamp ≤ 10⁷", "At most 10⁵ operations"],
    starterCode: {
      javascript: `class TimeMap {\n  constructor() { /* Initialize your store */ }\n  set(key, value, timestamp) { /* Write your solution */ }\n  get(key, timestamp) { /* Write your solution */ }\n}\nconst store = new TimeMap(); store.set("foo", "bar", 1); console.log(store.get("foo", 1)); console.log(store.get("foo", 3)); store.set("foo", "bar2", 4); console.log(store.get("foo", 4));`,
      python: `class TimeMap:\n    def __init__(self):\n        # Initialize your store\n        pass\n    def set(self, key, value, timestamp):\n        # Write your solution\n        pass\n    def get(self, key, timestamp):\n        # Write your solution\n        pass\nstore = TimeMap()\nstore.set("foo", "bar", 1)\nprint(store.get("foo", 1))\nprint(store.get("foo", 3))\nstore.set("foo", "bar2", 4)\nprint(store.get("foo", 4))`,
      cpp: `#include <iostream>\n#include <string>\nusing namespace std;\nclass TimeMap { public: void set(string key,string value,int timestamp) {} string get(string key,int timestamp) { return ""; } };\nint main() { TimeMap s; s.set("foo","bar",1); cout<<s.get("foo",1)<<endl; cout<<s.get("foo",3)<<endl; s.set("foo","bar2",4); cout<<s.get("foo",4)<<endl; }`,
    },
    expectedOutput: { javascript: "bar\nbar\nbar2", python: "bar\nbar\nbar2", cpp: "bar\nbar\nbar2" },
  },
  "reorder-list": {
    id: "reorder-list", title: "Reorder List", difficulty: "Medium", category: "Linked List • Two Pointers",
    description: { text: "Given the values of a linked list in order, reorder it as first, last, second, second-last, and so on. Do not change the node values.", notes: ["The array representation is used for input and output; solve by rearranging the list nodes."] },
    examples: [{ input: "values = [1,2,3,4]", output: "[1,4,2,3]" }, { input: "values = [1,2,3,4,5]", output: "[1,5,2,4,3]" }],
    constraints: ["1 ≤ list length ≤ 5 × 10⁴", "1 ≤ node value ≤ 1000"],
    starterCode: {
      javascript: `function reorderList(values) {\n  // Write your solution here\n}\nconsole.log(JSON.stringify(reorderList([1, 2, 3, 4])));`,
      python: `def reorderList(values):\n    # Write your solution here\n    pass\nprint(reorderList([1, 2, 3, 4]))`,
      cpp: `#include <iostream>\n#include <vector>\nusing namespace std;\nclass Solution { public: vector<int> reorderList(vector<int> values) { /* Write your solution */ return {}; } };\nint main() { for(int x:Solution().reorderList({1,2,3,4})) cout<<x<<" "; cout<<endl; }`,
    },
    expectedOutput: { javascript: "[1,4,2,3]", python: "[1, 4, 2, 3]", cpp: "1 4 2 3 " },
  },
  "next-greater-circular": {
    id: "next-greater-circular", title: "Next Greater Element II", difficulty: "Medium", category: "Stack • Monotonic Stack",
    description: { text: "For each value in a circular array, return the first strictly greater value encountered when moving forward. Use -1 if none exists.", notes: [] },
    examples: [{ input: "nums = [1,2,1]", output: "[2,-1,2]" }, { input: "nums = [1,2,3,4,3]", output: "[2,3,4,-1,4]" }],
    constraints: ["1 ≤ nums.length ≤ 10⁴", "-10⁹ ≤ nums[i] ≤ 10⁹"],
    starterCode: {
      javascript: `function nextGreaterElements(nums) {\n  // Write your solution here\n}\nconsole.log(JSON.stringify(nextGreaterElements([1, 2, 1])));`,
      python: `def nextGreaterElements(nums):\n    # Write your solution here\n    pass\nprint(nextGreaterElements([1, 2, 1]))`,
      cpp: `#include <iostream>\n#include <vector>\nusing namespace std;\nclass Solution { public: vector<int> nextGreaterElements(vector<int>& nums) { /* Write your solution */ return {}; } };\nint main() { vector<int> n={1,2,1}; for(int x:Solution().nextGreaterElements(n)) cout<<x<<" "; cout<<endl; }`,
    },
    expectedOutput: { javascript: "[2,-1,2]", python: "[2, -1, 2]", cpp: "2 -1 2 " },
  },
  "binary-tree-right-side-view": {
    id: "binary-tree-right-side-view", title: "Binary Tree Right Side View", difficulty: "Medium", category: "Tree • Breadth First Search",
    description: { text: "Return the value visible at each depth when a binary tree is viewed from its right side. The tree is represented in level order with null for missing children.", notes: ["In C++, -1 represents null; node values are nonnegative."] },
    examples: [{ input: "root = [1,2,3,null,5,null,4]", output: "[1,3,4]" }, { input: "root = [1,null,3]", output: "[1,3]" }],
    constraints: ["0 ≤ number of nodes ≤ 100", "0 ≤ node value ≤ 100"],
    starterCode: {
      javascript: `function rightSideView(levelOrder) {\n  // Write your solution here\n}\nconsole.log(rightSideView([1, 2, 3, null, 5, null, 4]).length);`,
      python: `def rightSideView(levelOrder):\n    # Write your solution here\n    pass\nprint(len(rightSideView([1, 2, 3, None, 5, None, 4])))`,
      cpp: `#include <iostream>\n#include <vector>\nusing namespace std;\nclass Solution { public: vector<int> rightSideView(vector<int> levelOrder) { /* Write your solution */ return {}; } };\nint main() { cout<<Solution().rightSideView({1,2,3,-1,5,-1,4}).size()<<endl; }`,
    },
    expectedOutput: { javascript: "3", python: "3", cpp: "3" },
  },
  "redundant-connection": {
    id: "redundant-connection", title: "Redundant Connection", difficulty: "Medium", category: "Graph • Union Find",
    description: { text: "A tree on labels 1 through n has one extra undirected edge added. Return the edge whose removal restores a tree. If more than one answer is possible, return the one appearing last in the input.", notes: [] },
    examples: [{ input: "edges = [[1,2],[1,3],[2,3]]", output: "[2,3]" }, { input: "edges = [[1,2],[2,3],[3,4],[1,4],[1,5]]", output: "[1,4]" }],
    constraints: ["3 ≤ edges.length ≤ 1000", "1 ≤ u < v ≤ edges.length", "The input contains exactly one redundant edge"],
    starterCode: {
      javascript: `function findRedundantConnection(edges) {\n  // Write your solution here\n}\nconsole.log(JSON.stringify(findRedundantConnection([[1, 2], [1, 3], [2, 3]])));`,
      python: `def findRedundantConnection(edges):\n    # Write your solution here\n    pass\nprint(findRedundantConnection([[1, 2], [1, 3], [2, 3]]))`,
      cpp: `#include <iostream>\n#include <vector>\nusing namespace std;\nclass Solution { public: vector<int> findRedundantConnection(vector<vector<int>>& edges) { /* Write your solution */ return {}; } };\nint main() { vector<vector<int>> edges={{1,2},{1,3},{2,3}}; auto e=Solution().findRedundantConnection(edges); for(int x:e) cout<<x<<" "; cout<<endl; }`,
    },
    expectedOutput: { javascript: "[2,3]", python: "[2, 3]", cpp: "2 3 " },
  },
  "min-cost-connect-points": {
    id: "min-cost-connect-points", title: "Min Cost to Connect All Points", difficulty: "Medium", category: "Graph • Minimum Spanning Tree • Greedy",
    description: { text: "Connect every 2D point so the total Manhattan distance of chosen connections is as small as possible. Return the minimum total cost; any pair of points may be connected directly.", notes: ["The Manhattan distance between two points is |x₁-x₂| + |y₁-y₂|."] },
    examples: [{ input: "points = [[0,0],[2,2],[3,10],[5,2],[7,0]]", output: "20" }, { input: "points = [[3,12],[-2,5],[-4,1]]", output: "18" }],
    constraints: ["1 ≤ points.length ≤ 1000", "-10⁶ ≤ x, y ≤ 10⁶", "All points are distinct"],
    starterCode: {
      javascript: `function minCostConnectPoints(points) {\n  // Write your solution here\n}\nconsole.log(minCostConnectPoints([[0, 0], [2, 2], [3, 10], [5, 2], [7, 0]]));`,
      python: `def minCostConnectPoints(points):\n    # Write your solution here\n    pass\nprint(minCostConnectPoints([[0, 0], [2, 2], [3, 10], [5, 2], [7, 0]]))`,
      cpp: `#include <iostream>\n#include <vector>\nusing namespace std;\nclass Solution { public: int minCostConnectPoints(vector<vector<int>>& points) { /* Write your solution */ return 0; } };\nint main() { vector<vector<int>> p={{0,0},{2,2},{3,10},{5,2},{7,0}}; cout<<Solution().minCostConnectPoints(p)<<endl; }`,
    },
    expectedOutput: { javascript: "20", python: "20", cpp: "20" },
  },
  "task-scheduler": {
    id: "task-scheduler", title: "Task Scheduler", difficulty: "Medium", category: "Greedy • Heap • Scheduling",
    description: { text: "Each task is identified by an uppercase letter and takes one interval. Identical tasks must be separated by at least n idle or task intervals. Return the fewest total intervals needed to finish all tasks.", notes: ["Different task types may run in adjacent intervals."] },
    examples: [{ input: 'tasks = ["A","A","A","B","B","B"], n = 2', output: "8" }, { input: 'tasks = ["A","C","A","B","D","B"], n = 1', output: "6" }],
    constraints: ["1 ≤ tasks.length ≤ 10⁴", "tasks[i] is an uppercase English letter", "0 ≤ n ≤ 100"],
    starterCode: {
      javascript: `function leastInterval(tasks, n) {\n  // Write your solution here\n}\nconsole.log(leastInterval(["A", "A", "A", "B", "B", "B"], 2));`,
      python: `def leastInterval(tasks, n):\n    # Write your solution here\n    pass\nprint(leastInterval(["A", "A", "A", "B", "B", "B"], 2))`,
      cpp: `#include <iostream>\n#include <vector>\nusing namespace std;\nclass Solution { public: int leastInterval(vector<char>& tasks,int n) { /* Write your solution */ return 0; } };\nint main() { vector<char> t={'A','A','A','B','B','B'}; cout<<Solution().leastInterval(t,2)<<endl; }`,
    },
    expectedOutput: { javascript: "8", python: "8", cpp: "8" },
  },
  "interval-list-intersections": {
    id: "interval-list-intersections", title: "Interval List Intersections", difficulty: "Medium", category: "Intervals • Two Pointers",
    description: { text: "Given two sorted lists of pairwise-disjoint closed intervals, return every non-empty intersection between one interval from each list in sorted order.", notes: ["An intersection containing a single endpoint is non-empty."] },
    examples: [{ input: "first = [[0,2],[5,10],[13,23],[24,25]], second = [[1,5],[8,12],[15,24],[25,26]]", output: "[[1,2],[5,5],[8,10],[15,23],[24,24],[25,25]]" }, { input: "first = [[1,3],[5,9]], second = [[2,5],[7,10]]", output: "[[2,3],[5,5],[7,9]]" }],
    constraints: ["0 ≤ first.length, second.length ≤ 1000", "Intervals within each list are sorted and pairwise disjoint", "0 ≤ start ≤ end ≤ 10⁹"],
    starterCode: {
      javascript: `function intervalIntersection(first, second) {\n  // Write your solution here\n}\nconsole.log(intervalIntersection([[0, 2], [5, 10], [13, 23], [24, 25]], [[1, 5], [8, 12], [15, 24], [25, 26]]).length);`,
      python: `def intervalIntersection(first, second):\n    # Write your solution here\n    pass\nprint(len(intervalIntersection([[0, 2], [5, 10], [13, 23], [24, 25]], [[1, 5], [8, 12], [15, 24], [25, 26]])))`,
      cpp: `#include <iostream>\n#include <vector>\nusing namespace std;\nclass Solution { public: vector<vector<int>> intervalIntersection(vector<vector<int>>& first,vector<vector<int>>& second) { /* Write your solution */ return {}; } };\nint main() { vector<vector<int>> a={{0,2},{5,10},{13,23},{24,25}},b={{1,5},{8,12},{15,24},{25,26}}; cout<<Solution().intervalIntersection(a,b).size()<<endl; }`,
    },
    expectedOutput: { javascript: "6", python: "6", cpp: "6" },
  },
  "sliding-window-maximum": {
    id: "sliding-window-maximum", title: "Sliding Window Maximum", difficulty: "Hard", category: "Array • Monotonic Queue • Sliding Window",
    description: { text: "For every contiguous window of size k, return its maximum value in left-to-right order.", notes: ["Aim for O(n) time rather than scanning each window independently."] },
    examples: [{ input: "nums = [1,3,-1,-3,5,3,6,7], k = 3", output: "[3,3,5,5,6,7]" }, { input: "nums = [1], k = 1", output: "[1]" }],
    constraints: ["1 ≤ nums.length ≤ 10⁵", "-10⁴ ≤ nums[i] ≤ 10⁴", "1 ≤ k ≤ nums.length"],
    starterCode: {
      javascript: `function maxSlidingWindow(nums, k) {\n  // Write your solution here\n}\nconsole.log(JSON.stringify(maxSlidingWindow([1, 3, -1, -3, 5, 3, 6, 7], 3)));`,
      python: `def maxSlidingWindow(nums, k):\n    # Write your solution here\n    pass\nprint(maxSlidingWindow([1, 3, -1, -3, 5, 3, 6, 7], 3))`,
      cpp: `#include <iostream>\n#include <vector>\nusing namespace std;\nclass Solution { public: vector<int> maxSlidingWindow(vector<int>& nums,int k) { /* Write your solution */ return {}; } };\nint main() { vector<int> n={1,3,-1,-3,5,3,6,7}; for(int x:Solution().maxSlidingWindow(n,3)) cout<<x<<" "; cout<<endl; }`,
    },
    expectedOutput: { javascript: "[3,3,5,5,6,7]", python: "[3, 3, 5, 5, 6, 7]", cpp: "3 3 5 5 6 7 " },
  },
  "serialize-binary-tree": {
    id: "serialize-binary-tree", title: "Serialize and Deserialize Binary Tree", difficulty: "Hard", category: "Tree • Breadth First Search • Design",
    description: { text: "Implement a round trip for a binary tree represented by level-order tokens. Serialize values as comma-separated tokens, use # for null children, and omit trailing null tokens; deserializing then serializing must preserve this canonical form.", notes: ["For example, [1,2,3,null,null,4,5] serializes as 1,2,3,#,#,4,5."] },
    examples: [{ input: "tree = [1,2,3,null,null,4,5]", output: "1,2,3,#,#,4,5" }, { input: "tree = []", output: "#" }],
    constraints: ["0 ≤ number of nodes ≤ 10⁴", "-1000 ≤ node value ≤ 1000", "Input tokens describe a valid binary tree"],
    starterCode: {
      javascript: `function roundTripTree(levelOrderTokens) {\n  // Write serialization and deserialization here\n}\nconsole.log(roundTripTree(["1", "2", "3", "#", "#", "4", "5"]));`,
      python: `def roundTripTree(levelOrderTokens):\n    # Write serialization and deserialization here\n    pass\nprint(roundTripTree(["1", "2", "3", "#", "#", "4", "5"]))`,
      cpp: `#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\nclass Solution { public: string roundTripTree(vector<string> tokens) { /* Write serialization and deserialization */ return ""; } };\nint main() { cout<<Solution().roundTripTree({"1","2","3","#","#","4","5"})<<endl; }`,
    },
    expectedOutput: { javascript: "1,2,3,#,#,4,5", python: "1,2,3,#,#,4,5", cpp: "1,2,3,#,#,4,5" },
  },
  "regex-matching": {
    id: "regex-matching", title: "Regular Expression Matching", difficulty: "Hard", category: "Dynamic Programming • Strings",
    description: { text: "Return whether the entire string matches a pattern containing lowercase letters, . (any one character), and * (zero or more repetitions of the preceding element). The pattern is valid.", notes: ["A match must consume the whole string and whole pattern."] },
    examples: [{ input: 's = "aa", p = "a"', output: "false" }, { input: 's = "aa", p = "a*"', output: "true" }, { input: 's = "ab", p = ".*"', output: "true" }],
    constraints: ["1 ≤ s.length ≤ 20", "1 ≤ p.length ≤ 30", "s contains lowercase English letters", "p contains lowercase letters, . and *"],
    starterCode: {
      javascript: `function isMatch(s, p) {\n  // Write your solution here\n}\nconsole.log(isMatch("aa", "a*"));`,
      python: `def isMatch(s, p):\n    # Write your solution here\n    pass\nprint(isMatch("aa", "a*"))`,
      cpp: `#include <iostream>\n#include <string>\nusing namespace std;\nclass Solution { public: bool isMatch(string s,string p) { /* Write your solution */ return false; } };\nint main() { cout<<(Solution().isMatch("aa","a*")?"true":"false")<<endl; }`,
    },
    expectedOutput: { javascript: "true", python: "True", cpp: "true" },
  },
  "burst-balloons": {
    id: "burst-balloons", title: "Burst Balloons", difficulty: "Hard", category: "Dynamic Programming • Interval DP",
    description: { text: "Each balloon has a value. Bursting balloon i earns the product of its value and the values of its current neighbors; a missing neighbor has value 1. Return the maximum coins obtainable by choosing an order to burst all balloons.", notes: ["The values of neighbors change as balloons are removed."] },
    examples: [{ input: "nums = [3,1,5,8]", output: "167" }, { input: "nums = [1,5]", output: "10" }],
    constraints: ["1 ≤ nums.length ≤ 300", "0 ≤ nums[i] ≤ 100"],
    starterCode: {
      javascript: `function maxCoins(nums) {\n  // Write your solution here\n}\nconsole.log(maxCoins([3, 1, 5, 8]));`,
      python: `def maxCoins(nums):\n    # Write your solution here\n    pass\nprint(maxCoins([3, 1, 5, 8]))`,
      cpp: `#include <iostream>\n#include <vector>\nusing namespace std;\nclass Solution { public: int maxCoins(vector<int>& nums) { /* Write your solution */ return 0; } };\nint main() { vector<int> n={3,1,5,8}; cout<<Solution().maxCoins(n)<<endl; }`,
    },
    expectedOutput: { javascript: "167", python: "167", cpp: "167" },
  },
  "word-break-ii": {
    id: "word-break-ii", title: "Word Break II", difficulty: "Hard", category: "Trie • Backtracking • Dynamic Programming",
    description: { text: "Insert spaces into a string so every resulting word belongs to the supplied dictionary. Return all valid sentences; each dictionary word may be reused.", notes: ["Return each sentence once. The output order does not matter."] },
    examples: [{ input: 's = "catsanddog", wordDict = ["cat","cats","and","sand","dog"]', output: '["cat sand dog","cats and dog"]' }, { input: 's = "catsandog", wordDict = ["cats","dog","sand","and","cat"]', output: "[]" }],
    constraints: ["1 ≤ s.length ≤ 20", "1 ≤ wordDict.length ≤ 1000", "Dictionary words are nonempty lowercase strings", "The number of returned sentences is finite"],
    starterCode: {
      javascript: `function wordBreak(s, wordDict) {\n  // Write your solution here\n}\nconsole.log(wordBreak("catsanddog", ["cat", "cats", "and", "sand", "dog"]).length);`,
      python: `def wordBreak(s, wordDict):\n    # Write your solution here\n    pass\nprint(len(wordBreak("catsanddog", ["cat", "cats", "and", "sand", "dog"])))`,
      cpp: `#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\nclass Solution { public: vector<string> wordBreak(string s,vector<string>& words) { /* Write your solution */ return {}; } };\nint main() { vector<string> w={"cat","cats","and","sand","dog"}; cout<<Solution().wordBreak("catsanddog",w).size()<<endl; }`,
    },
    expectedOutput: { javascript: "2", python: "2", cpp: "2" },
  },
};

export const LANGUAGE_CONFIG = {
  javascript: {
    name: "JavaScript",
    icon: "/javascript.png",
    monacoLang: "javascript",
  },
  python: {
    name: "Python",
    icon: "/python.png",
    monacoLang: "python",
  },
  cpp: {
    name: "C++",
    icon: "/cpp.png",
    monacoLang: "cpp",
  },
};

