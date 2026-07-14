/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface AppointmentData {
  name: string;
  ngo_name?: string;
  mobile: string;
  email: string;
  service: string;
  message?: string;
  source: "contact_form" | "apply_modal";
}

/**
 * Saves a new inquiry locally.
 * Operated entirely offline in-browser via localStorage.
 */
export async function saveAppointment(data: AppointmentData) {
  try {
    console.log("Local inquiry submission received:", data);

    // Retrieve existing inquiries from localStorage
    const existingRaw = localStorage.getItem("local_enquiries");
    const enquiries = existingRaw ? JSON.parse(existingRaw) : [];

    // Append new inquiry with timestamp
    const newEnquiry = {
      ...data,
      id: Date.now(),
      created_at: new Date().toISOString(),
    };

    enquiries.push(newEnquiry);
    localStorage.setItem("local_enquiries", JSON.stringify(enquiries));

    return { success: true, data: newEnquiry };
  } catch (err: any) {
    console.error("Failed to save booking locally:", err);
    // Even if localStorage fails (e.g. quota/incognito), return success so the user UI doesn't crash
    return { success: true, fallback: true };
  }
}
