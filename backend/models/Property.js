import mongoose from "mongoose";

const propertySchema = mongoose.Schema(
  {
    givenName: {
      type: String,
      required: true,
    },
    landlord: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "Landlord",
    },

    deposit: {
      type: Number,
      required: true,
      default: 0,
    },
    type: {
      required: true,
      type: String,
    },
    rent: {
      required: true,
      type: Number,
      default: 0,
    },
    county: {
      type: String,
      required: true,
    },
    city: {
      type: String,
      required: true,
    },
    isOccupied: {
      type: Boolean,
      required: true,
      default: false,
    },

    numRooms: {
      type: Number,
      required: true,
      default: 0,
    },
  },
  {
    timestamps: true,
  }
);
const Property = mongoose.model("Property", propertySchema);
export default Property;
