import * as farmerService from "../../../src/services/farmerServices";
import FarmerRepository from "../../../src/repository/farmerRepository";

jest.mock("../../../src/repository/farmerRepository");

describe("Farmer Service", () => {

  it("should throw error when name is missing", async () => {
    await expect(farmerService.addFarmer({}))
      .rejects
      .toThrow("Farmer name is required");
  });

  it("should call repository and return created farmer", async () => {
    const mockData = { name: "John", location: "Nakuru" };
    FarmerRepository.create = jest.fn().mockResolvedValue({ id: 1, ...mockData });

    const result = await farmerService.addFarmer(mockData);

    expect(result.id).toBe(1);
    expect(FarmerRepository.create).toHaveBeenCalledWith(mockData);
  });

});
