import { describe, it, expect, beforeEach } from "vitest";
import { shallowMount } from "@vue/test-utils";
import Contact from "../Contact.vue";

describe("Contact", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallowMount(Contact);
  });

  it("should show popup and reset form on submit", async () => {
    await wrapper.setData({
      form: {
        firstName: "Pepa",
        lastName: "Doe",
        email: "pepa@example.com",
        message: "Hello",
      },
    });

    wrapper.vm.handleSubmit();

    expect(wrapper.vm.showPopup).toBe(true);

    expect(wrapper.vm.form.firstName).toBe("");
    expect(wrapper.vm.form.lastName).toBe("");
    expect(wrapper.vm.form.email).toBe("");
    expect(wrapper.vm.form.message).toBe("");
  });

  it("should hide popup when closePopup is called", async () => {
    await wrapper.setData({ showPopup: true });

    wrapper.vm.closePopup();

    expect(wrapper.vm.showPopup).toBe(false);
  });
});
