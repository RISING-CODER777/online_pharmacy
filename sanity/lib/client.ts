import { createClient } from "next-sanity"

import { apiVersion, dataset, projectId, useCdn } from "../env"

export const client = createClient({
  apiVersion,
  dataset,
  projectId,
  useCdn,
  token:
  "skjTuGCpwZYo9IKvB1OZL3nry6Smsheq2sZmfkQPqAPc6Lh4JfRjTnLN4ScHc7KEmJaAkaCqlOpIgfpMWcaNkk5kKJxXweRpEYtIYSYzhx1ivJ89l5KItaHD9VXVBsy5046XkNbwmt8pa9EEMj3xv6n2TQnwY6UMDmQfwnNhFY9ZYOZjrJkV"
})
