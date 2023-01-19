const main = async () => {
  // Get the contract factory for the "Greeter" contract
  const greeterContractFactory = await hre.ethers.getContractFactory("Greeter");

  // Deploy the contract to the blockchain
  const greeterContract = await greeterContractFactory.deploy(
    "Hello, Hardhat!"
  );

  // Wait until the contract is deployed
  await greeterContract.deployed();

  // Log the address of the deployed contract
  console.log("Greeter Contract deployed to: ", greeterContract.address);
};

const runMain = async () => {
  try {
    // Call the main function
    await main();
    process.exit(0);
  } catch (error) {
    // Log any errors that occur
    console.log(error);
    process.exit(1);
  }
};

// Run the main function
runMain();
