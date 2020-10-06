const mongoose = require("mongoose");
const requireLogin = require("../middlewares/requireLogin");

module.exports = (app) => {
  app.get("/recipes", requireLogin, (req, res) => {
    res.send(recipes);
  });
};

const recipes = [
  {
    name: "KNÖDEL",
    ingredients:
      "1l milk&250g butter&6 tbsp sugar&350 g semolina&5 eggs&2 lemon zests",
    instructions:
      "1.Boil the milk. Then add the semolina mixing it non stop for approximately 3-4 minutes.&2.Transfer the batter to a bowl and add the zests then the eggs one by while the dough is still hot.&3. Let it rest for a few hours in the fridge. Make golf size balls and leave them in the fridge ready for cooking.&4. Cooking: Add the knödel to boiling water and cook it for about 8-10 min. Just until it floats. To add some extra texture and sweetness, after taking the knödel out of the water roll it in a mix of shradded coconut and sugar.",
  },
  {
    name: "WAFFLES",
    ingredients:
      "WET INGREDIENTS&1 cups aquafaba&1l coconut milk&1 1/3 cups coconut oil(melted)&DRY INGREDIENTS&5 cups gluten free flour&1/3 cup corn flour&1 1/3 cups brown sugar&20g baking powder&15g pink salt",
    instructions:
      "1. Whisk the aquafaba until it froths.&2. Then add the remaining liquid ingredients.&3. Add in the dry ingredients and mix it well until it becomes a smooth mix.&TIP: For a crispier waffle make the batter one day ahead and store it in the fridge.",
  },
  {
    name: "PANCAKES",
    ingredients:
      "600g dates&2 lemons juice&1 tbsp vanilla paste&700ml soy milk&3 cups buckwheat flour&3 cups gluten free flour&4.5 tbsp baking powder&2 tsp pink salt",
    instructions:
      "1. Soak the dates overnight in water&2. Drain the dates but reserve the liquid. Put the dates, the vanilla paste and the lemon juice in a blender and mix it until it gets smooth. Then add the soaking liquid until the blender is full and continue to blend.&3. In a large bowl combine both flour, the baking powder and the salt.&4. Add the date mixture to the bowl with the flour and stir through. Then add the soy milk in small amounts while stirring until the mixture thikens up.&5. Try a small sample and adjust the mix by adding flour if it is too runny or more liquid it is too thick.&5. Cooking: using a non-stick pan heat the pan and add some oil. Heat the pan for about 1 minute. Add about two spoons of the mix per pancake. Let it cook in one side until it gets golden. Flip it and cook further in the oven for about 10 more minutes.",
  },
  {
    name: "PIKELETS",
    ingredients:
      "8 eggs&1l milk (room temperature)&200g butter&2 1/2 cups self raising flour&1 cup plain flour&1/4 cup baking powder",
    instructions:
      "1. Sift and combine dry ingredients in small bowl, set a side.&2. In large and deep bowl add eggs and beat then with machine for at least 15 min.&3. Gradually add melted butter (make sure uses it very hot). After it gradually add milk.&4. After all wet ingredientscombined well, stops to use machine and combine dry ingredientes by hand been gentle, make sure do not leave any lumps. Set a side over night.&5. Cooking: using a non-stick pan heat the pan and add some oil. Heat the pan for about 1 minute. Add about two spoons of the mix per pancake. Let it cook in one side until it gets golden. Flip it and cook further in the oven for about eight more minutes.",
  },
];
