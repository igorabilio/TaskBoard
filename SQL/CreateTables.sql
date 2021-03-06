/****** Object:  Table [dbo].[Project] ******/
CREATE TABLE [dbo].[Project](
	[id] [uniqueidentifier] NOT NULL,
	[code] [varchar](10) NOT NULL,
	[name] [varchar](150) NOT NULL,
	[description] [varchar](300) NOT NULL,
	[due_date] [datetime] NULL,
	[owner] [uniqueidentifier] NULL,
	[status] [char](1) NOT NULL,
 CONSTRAINT [PK_Project] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Task] ******/
CREATE TABLE [dbo].[Task](
	[id] [uniqueidentifier] NOT NULL,
	[project_id] [uniqueidentifier] NOT NULL,
	[code] [varchar](10) NOT NULL,
	[name] [varchar](150) NOT NULL,
	[description] [varchar](500) NOT NULL,
	[due_date] [datetime] NULL,
	[status] [char](1) NOT NULL,
	[assigned_to] [uniqueidentifier] NULL,
 CONSTRAINT [PK_Task] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[User] ******/
CREATE TABLE [dbo].[User](
	[id] [uniqueidentifier] NOT NULL,
	[name] [varchar](150) NOT NULL,
	[username] [varchar](150) NOT NULL,
	[email] [varchar](300) NOT NULL,
	[status] [char](1) NOT NULL,
 CONSTRAINT [PK_User] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
INSERT [dbo].[Project] ([id], [code], [name], [description], [due_date], [owner], [status]) VALUES (N'fa4eb80b-a82b-488d-a2b7-475c70a21caa', N'PP', N'Pilot Project', N'This is a pilot project with test purposes 1', CAST(N'2019-07-10T00:00:00.000' AS DateTime), N'2130a055-6839-45a7-94d6-02b83d6b1723', N'A')
GO
INSERT [dbo].[Task] ([id], [project_id], [code], [name], [description], [due_date], [status], [assigned_to]) VALUES (N'97d646b6-5312-49a3-9297-5bd22bf0b55c', N'fa4eb80b-a82b-488d-a2b7-475c70a21caa', N'PPT01', N'Create a project', N'You need to create the pilot project', CAST(N'2019-07-19T00:00:00.000' AS DateTime), N'D', N'2130a055-6839-45a7-94d6-02b83d6b1723')
GO
INSERT [dbo].[Task] ([id], [project_id], [code], [name], [description], [due_date], [status], [assigned_to]) VALUES (N'58aeba72-41f1-4c3a-8053-725e14cc319a', N'fa4eb80b-a82b-488d-a2b7-475c70a21caa', N'PPT02', N'User functionality', N'Create the user functionality', CAST(N'2019-06-29T00:00:00.000' AS DateTime), N'A', N'2130a055-6839-45a7-94d6-02b83d6b1723')
GO
INSERT [dbo].[User] ([id], [name], [username], [email], [status]) VALUES (N'2130a055-6839-45a7-94d6-02b83d6b1723', N'Igor', N'igor', N'igor@test.com', N'A')
GO
ALTER TABLE [dbo].[Project]  WITH CHECK ADD  CONSTRAINT [FK_Project_User] FOREIGN KEY([owner])
REFERENCES [dbo].[User] ([id])
GO
ALTER TABLE [dbo].[Project] CHECK CONSTRAINT [FK_Project_User]
GO
ALTER TABLE [dbo].[Task]  WITH CHECK ADD  CONSTRAINT [FK_Task_Project] FOREIGN KEY([project_id])
REFERENCES [dbo].[Project] ([id])
GO
ALTER TABLE [dbo].[Task] CHECK CONSTRAINT [FK_Task_Project]
GO
ALTER TABLE [dbo].[Task]  WITH CHECK ADD  CONSTRAINT [FK_Task_User] FOREIGN KEY([assigned_to])
REFERENCES [dbo].[User] ([id])
GO
ALTER TABLE [dbo].[Task] CHECK CONSTRAINT [FK_Task_User]