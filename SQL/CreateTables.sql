/****** Before execute this script ******/
/****** Create a new database called TaskBoard ******/
/****** Execute this script ******/

USE TaskBoard
/****** Object:  Table [dbo].[Project] ******/
CREATE TABLE [dbo].[Project](
	[id] [uniqueidentifier] NOT NULL,
	[code] [varchar](10) NOT NULL,
	[name] [varchar](150) NOT NULL,
	[description] [varchar](300) NOT NULL,
	[due_date] [datetime] NULL,
	[owner] [uniqueidentifier] NULL,
 CONSTRAINT [PK_Project] PRIMARY KEY CLUSTERED 
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
 CONSTRAINT [PK_User] PRIMARY KEY CLUSTERED 
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
INSERT [dbo].[User] ([id], [name], [username], [email]) VALUES (N'2130a055-6839-45a7-94d6-02b83d6b1723', N'John D', N'john', N'john@test.com')
INSERT [dbo].[Project] ([id], [code], [name], [description], [due_date], [owner]) VALUES (N'fa4eb80b-a82b-488d-a2b7-475c70a21caa', N'PP', N'Pilot Project', N'This is a pilot project with test purposes', CAST(N'2019-07-01T18:00:00.677' AS DateTime), N'2130a055-6839-45a7-94d6-02b83d6b1723')
INSERT [dbo].[Task] ([id], [project_id], [code], [name], [description], [due_date], [status], [assigned_to]) VALUES ('97D646B6-5312-49A3-9297-5BD22BF0B55C', 'fa4eb80b-a82b-488d-a2b7-475c70a21caa', 'PPT01', 'Create a project', 'Create the pilot project', '2019-07-19 00:00:00.000', 'A', '2130a055-6839-45a7-94d6-02b83d6b1723')
