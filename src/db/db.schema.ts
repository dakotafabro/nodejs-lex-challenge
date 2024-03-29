import { ObjectId } from "mongodb";
import { Schema } from "mongoose";
import {
  incrementModerationCount,
  isAvailable,
  popReport,
  pushReport,
  setModeratedBy,
  setModeratorDecision,
  setReportedInappropriate,
  setResolved,
} from "./db.methods";

const PostSchema = new Schema({
  content: String,
  author: String,
  reportedInappropriate: Boolean,
  isInappropriate: Boolean,
  isResolved: Boolean,
  moderatedBy: [{ type: ObjectId || String, maxLength: 1 }],
});

PostSchema.methods.setModeratedBy = setModeratedBy;
PostSchema.methods.setReportedInappropriate = setReportedInappropriate;
PostSchema.methods.setResolved = setResolved;
PostSchema.methods.setModeratorDecision = setModeratorDecision;

const ModeratorSchema = new Schema({
  name: String,
  activeReport: Object,
  moderationCount: Number,
  isAvailableForReport: Boolean,
});

ModeratorSchema.methods.isAvailable = isAvailable;
ModeratorSchema.methods.popReport = popReport;
ModeratorSchema.methods.pushReport = pushReport;
ModeratorSchema.methods.incrementModerationCount = incrementModerationCount;

export { PostSchema, ModeratorSchema };
