## Find Related Products

This question is based on the product recommendation system on Amazon. Every time you open the product page on Amazon, you can see a section "People who viewed this also viewed." Now given a product relationship represented as a graph(adjacent list), find out the largest connected component on this graph.

Notice the graph is transitive.


### Example:
```
Input:
[["product1", "product2", "product3"]
 ["product5", "product2"]
 ["product6", "product7"]
 ["product8", "product7"]]

Output:
[ 'product1', 'product2', 'product3', 'product5' ]

```

### Related Links
* [AoneCode | This Question](https://aonecode.com/amazon-online-assessment-find-related-books)
* [GeeksForGeek | Actual Question](https://www.geeksforgeeks.org/amazon-interview-experience-sde-2-10/)
