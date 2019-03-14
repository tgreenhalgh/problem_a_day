def products(nums):
    # Get the before products
    before_products = []
    for num in nums:
        if before_products:
            before_products.append(before_products[-1] * num)
        else:
            before_products.append(num)

    # Get the after products
    after_products = []
    for num in reversed(nums):
        if after_products:
            after_products.append(after_products[-1] * num)
        else:
            after_products.append(num)
    after_products = list(reversed(after_products))

    # generate result from the product of befores and afters
    results = []
    for i in range(len(nums)):
        if i == 0:
            results.append(after_products[i + 1])
        elif i == len(nums) - 1:
            results.append(before_products[i - 1])
        else:
            results.append(before_products[i - 1] * after_products[i + 1])

    return results


print(products([1, 2, 3, 4, 5]))  # [120, 60, 40, 30, 24]
