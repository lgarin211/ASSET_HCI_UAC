#include <string.h>
#include <stdio.h>
#include <stdlib.h>

// struck node
struct Food
{
    int id;
    char name[20];
    int price;
    int height;
    struct Food *left, *right;
};

Food *CreateFood(int id, char *name, int price)
{
    Food *newFood = (Food *)malloc(sizeof(Food));
    newFood->id = id;
    strcpy(newFood->name, name);
    newFood->price = price;
    newFood->height = 1;
    newFood->left = NULL;
    newFood->right = NULL;
    return newFood;
}

int max(int a, int b)
{
    return (a > b) ? a : b;
}

int getHeight(Food *curr)
{
    if (curr == NULL)
        return 0;
    return curr->height;
}

int getBalance(Food *curr)
{
    if (curr == NULL)
        return 0;
    return getHeight(curr->left) - getHeight(curr->right);
}

Food *rightRotate(Food *curr)
{
    Food *left = curr->left;
    Food *right = left->right;

    left->right = curr;
    curr->left = right;

    curr->height = max(getHeight(curr->left), getHeight(curr->right)) + 1;
    left->height = max(getHeight(left->left), getHeight(left->right)) + 1;

    return left;
}

Food *leftRotate(Food *curr)
{
    Food *right = curr->right;
    Food *left = right->left;

    right->left = curr;
    curr->right = left;

    curr->height = max(getHeight(curr->left), getHeight(curr->right)) + 1;
    right->height = max(getHeight(right->left), getHeight(right->right)) + 1;

    return right;
}

// calculate height
int calculateHeight(Food *curr)
{
    if (curr == NULL)
        return 0;
    return 1 + max(calculateHeight(curr->left), calculateHeight(curr->right));
}

// insert
Food *insertFood(Food *curr, int id, char *name, int price)
{
    if (curr == NULL)
        return CreateFood(id, name, price);
    if (id < curr->id)
        curr->left = insertFood(curr->left, id, name, price);
    else if (id > curr->id)
        curr->right = insertFood(curr->right, id, name, price);
    else
        return curr;

    curr->height = calculateHeight(curr);
    int balance = getBalance(curr);
    if (balance > 1)
    {
        if (balance > curr->left->id)
        {
            return curr->left = rightRotate(curr);
        }
        return rightRotate(curr);
    }
    if (balance < -1)
    {
        if (balance < curr->right->id)
        {
            return curr->right = leftRotate(curr);
        }
        return leftRotate(curr);
    }
    
    return curr;
}

// in-order
void InOrder(Food *curr)
{
    if (curr != NULL)
    {
        InOrder(curr->left);
        printf("%d %s %d", curr->id, curr->name, curr->price);
        InOrder(curr->right);
    }
}

// pre-order
void PreOrder(Food *curr)
{
    if (curr != NULL)
    {
        printf("%d %s %d", curr->id, curr->name, curr->price);
        PreOrder(curr->left);
        PreOrder(curr->right);
    }
}

Food *deleteFood(Food *curr, int id)
{
    if (curr == NULL)
    {
        return curr;
    }
    if (id < curr->id)
    {
        curr->left = deleteFood(curr->left, id);
    }
    else if (id > curr->id)
    {
        curr->right = deleteFood(curr->right, id);
    }
    else
    {
        if (!curr->right && !curr->left)
        {
            free(curr);
            return NULL;
        }
        else if (!curr->right)
        {
            Food *temp = curr->left;
            free(curr);
            return temp;
        }
        else if (!curr->left)
        {
            Food *temp = curr->right;
            free(curr);
            return temp;
        }
        else
        {
            Food *temp = curr->left;
            while (temp->right)
            {
                temp = temp->right;
            }
            curr->id = temp->id;
            strcpy(curr->name, temp->name);
            curr->price = temp->price;

            curr->left = deleteFood(curr->left, temp->id);
        }
    }
    return curr;
}

// main
int main(int argc, char const *argv[])
{
    Food *root = NULL;
    root = insertFood(root, 10, "Bakso", 20000);
    root = insertFood(root, 5, "Bakmie", 18000);
    root = insertFood(root, 20, "Katsu", 28000);
    root = insertFood(root, 3, "Kentang Goreng", 10000);

    root = deleteFood(root, 3);
    root = deleteFood(root, 5);
    root = deleteFood(root, 10);
    root = deleteFood(root, 20);

    InOrder(root);
    return 0;
}
